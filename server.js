const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Read from env (Docker-safe)
const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  console.error("❌ MONGO_URL not set");
  process.exit(1);
}

const DB_NAME = "shabi-db";
let db;
let client;

// 🔹 One-time MongoDB init
async function initMongo() {
  try {
    client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("✅ MongoDB connected");

    db = client.db(DB_NAME);

    // ✅ One-time collection creation (optional but clean)
    const collections = await db.listCollections().toArray();
    const exists = collections.find(c => c.name === "users");

    if (!exists) {
      await db.createCollection("users");
      console.log("✅ users collection created");
    }

    console.log(`✅ Database ready: ${DB_NAME}`);
  } catch (err) {
    console.error("❌ MongoDB init failed:", err);
    process.exit(1);
  }
}

// GET all users
app.get("/getUsers", async (req, res) => {
  try {
    const data = await db.collection("users").find({}).toArray();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new user
app.post("/addUser", async (req, res) => {
  try {
    const result = await db.collection("users").insertOne(req.body);
    res.json({ success: true, id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server only AFTER MongoDB is ready
initMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
