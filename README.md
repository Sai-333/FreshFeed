# FreshFeed - YouTube Video Fetching API

FreshFeed is a web application that **fetches the latest YouTube videos** for a predefined search query and **stores them in a PostgreSQL database**. The project consists of:
- **Backend (Node.js + Express + PostgreSQL)** for fetching & storing videos.
- **Frontend (React.js)** for displaying videos with search functionality.
- **Database (PostgreSQL)** for structured storage.

---

## 🚀 Features
- Continuously fetches latest videos from **YouTube Data API v3**.
- Stores videos in a **PostgreSQL database**.
- Provides a **REST API** for fetching and searching stored videos.
- Fully containerized with **Docker Compose**.
- React frontend for **searching and viewing videos**.

---

## 📂 Project Structure
FreshFeed/ │── backend/ # Node.js (Express) API │── frontend/ # React.js UI │── database/ # PostgreSQL setup │── README.md # Project Documentation │── docker-compose.yml # Docker setup for backend & database

---
## 🔧 Installation & Setup

### **1️⃣ Setup PostgreSQL Database**
- Ensure **PostgreSQL is installed & running**.
- Create the database manually:
  ```sh
  psql -U postgres -c "CREATE DATABASE fampay;"
Run the schema:
sh
Copy
Edit
psql -U postgres -d fampay -f database/init.sql
2️⃣ Start the Backend
sh
Copy
Edit
cd backend
npm install
npm run dev
The backend will run at: http://localhost:5000
API Endpoints:
GET /api/videos?page=1&search=keyword → Fetch videos.
3️⃣ Start the Frontend
sh
Copy
Edit
cd frontend
npm install
npm start
Open in browser: http://localhost:3000
4️⃣ Run the Project with Docker (Optional)
sh
Copy
Edit
cd FreshFeed
docker-compose up --build -d
🔥 API Endpoints
Method	Endpoint	Description
GET	/api/videos	Fetch stored videos (with search)
GET	/api/status	Check API status
🛠 Tech Stack
Backend: Node.js, Express, PostgreSQL, Axios, node-cron
Frontend: React.js, Axios
Database: PostgreSQL
Containerization: Docker & Docker Compose