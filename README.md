# 🚀 Docker Node + MongoDB Test App

A simple **Dockerized Node.js + Express application** using **MongoDB** and **Mongo Express**, designed to demonstrate containerized backend development with Docker Compose.

---

## 🧱 Tech Stack

* **Node.js**
* **Express**
* **MongoDB**
* **Mongo Express**
* **Docker & Docker Compose**

---

## 📦 Prerequisites

Make sure you have the following installed:

* Docker
* Docker Compose

Verify with:

```bash
docker --version
docker compose version
```

---

## ▶️ Start the Application

Run the following commands to start all services in detached mode:

```bash
docker build -t my-node-app .

docker compose -f mongodb.yaml up -d
```

---

## 🌐 Access the Services

| Service        | URL                                            |
| -------------- | ---------------------------------------------- |
| Frontend / API | [http://localhost:5050](http://localhost:5050) |
| Mongo Express  | [http://localhost:8081](http://localhost:8081) |

---

## 🔐 Mongo Express Login

Default admin credentials:

```
Username: admin
Password: pass
```

> ⚠️ These credentials are for local development only.

---

## 🛠 Useful Docker Commands

### Stop all containers

```bash
docker compose -f mongodb.yaml stop
```

### Start stopped containers

```bash
docker compose -f mongodb.yaml start
```

### Restart containers

```bash
docker compose -f mongodb.yaml restart
```

### Stop & remove containers

```bash
docker compose -f mongodb.yaml down
```

---

## 📁 Project Purpose

This project is intended to:

* Demonstrate Docker containerization
* Show Node.js & MongoDB integration
* Practice Docker Compose workflows
* Serve as a backend Docker showcase for learning and portfolio use

---

## 📌 Notes

* MongoDB database and collections are created automatically on first insert.
* Environment variables are used for database configuration (Docker-safe).
* This setup is optimized for **local development & learning**.

---

## 🧑‍💻 Author

**Shabair Abdul Rehman**
Backend & Full-Stack Developer
🇦🇺 Australia