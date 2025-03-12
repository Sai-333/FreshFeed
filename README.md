# FreshFeed - YouTube Video Fetching API

![FreshFeed Banner](https://your-image-link.com/banner.png)

## About The Project

FreshFeed is a **YouTube video fetching API** that continuously retrieves the latest videos based on a predefined search query and stores them in a PostgreSQL database. The project consists of a **Node.js backend**, a **React.js frontend**, and database storage using **PostgreSQL**.

### **Key Features**
- ✅ **Fetches latest YouTube videos** every 10 minutes using YouTube Data API v3.
- ✅ **Stores videos in PostgreSQL** for easy search and retrieval.
- ✅ **Provides REST API** for searching and retrieving videos.
- ✅ **Frontend built using React.js & Material-UI**.
- ✅ **Pagination & Sorting support** for efficient video browsing.

## **Built With**

- [Node.js](https://nodejs.org/) - Backend
- [Express.js](https://expressjs.com/) - API Framework
- [React.js](https://reactjs.org/) - Frontend
- [Material-UI](https://mui.com/) - UI Components
- [PostgreSQL](https://www.postgresql.org/) - Database
- [YouTube Data API v3](https://developers.google.com/youtube/v3) - Fetching videos

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker (Optional)](https://www.docker.com/)

### **Installation**

#### **1. Clone the Repository**
```sh
 git clone https://github.com/Sai-333/FreshFeed.git
 cd FreshFeed
```

#### **2. Set Up the Backend**
```sh
cd backend
npm install
```

Create a `.env` file inside `backend/` and add:
```env
PORT=5000
DB_USER=db_user
DB_PASS=yourpassword
DB_HOST=localhost
DB_NAME=your name
DB_PORT=5432
YOUTUBE_API_KEYS=your_api_key1,your_api_key2
```

Start the backend server:
```sh
npm run dev
```

#### **3. Set Up the Frontend**
```sh
cd ../frontend
npm install
npm start
```
Frontend will be available at: `http://localhost:3000`

#### **4. Set Up the Database**
If using PostgreSQL manually:
```sh
psql -U postgres -d fampay -f database/init.sql
```
If using Docker:
```sh
cd database
docker-compose up -d
```

## **Usage**

### **API Endpoints**
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/api/videos`   | Fetch stored videos |
| GET    | `/api/videos?page=1&search=tech` | Paginated video search |

### **Testing the API**
```sh
curl http://localhost:5000/api/videos
```

## **Project Structure**
```
FreshFeed/
│── backend/                  # Node.js API
│── frontend/                 # React.js UI
│── database/                 # PostgreSQL setup
│── README.md                 # Project Documentation
│── docker-compose.yml        # Docker setup for backend & database
```

## **Contributing**
1. Fork the repo
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## **License**
Distributed under the MIT License. See `LICENSE` for more information.

## **Contact**
**Your Name** - [LinkedIn](https://linkedin.com/in/yourname) - your.email@example.com

Project Link: [https://github.com/yourusername/FreshFeed](https://github.com/yourusername/FreshFeed)

