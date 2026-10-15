# Articles API

A simple backend built with **Node.js**, **Express**, and **MongoDB (Mongoose)** for managing articles. It provides a REST API for creating, reading, and deleting articles, plus a server-rendered HTML page (EJS) that displays them.

## Live Demo

The API is deployed on Render: [https://simple-backend-nodej-s.onrender.com](https://simple-backend-nodej-s.onrender.com/)

> The app runs on Render's free tier, so the first request after a period of inactivity may take up to a minute to respond.

## Features

- Create, list, fetch, and delete articles through a JSON API
- MongoDB Atlas integration using Mongoose
- Server-side rendered articles page with EJS
- Environment-based configuration with `dotenv`

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) + [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)
- [dotenv](https://github.com/motdotla/dotenv)

## Getting Started

### Prerequisites

- Node.js 18 or later
- A MongoDB database (a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster works fine)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/articles-api.git
   cd articles-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root (see `.env.example`):

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string_here
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server runs at `http://localhost:3000`.

## Environment Variables

| Variable      | Description                |
| ------------- | -------------------------- |
| `PORT`        | Port the server listens on |
| `MONGODB_URI` | MongoDB connection string  |

## API Endpoints

| Method   | Endpoint              | Description                       |
| -------- | --------------------- | --------------------------------- |
| `POST`   | `/article`            | Create a new article              |
| `GET`    | `/articles`           | Get all articles (JSON)           |
| `GET`    | `/articles/:id`       | Get a single article by ID        |
| `DELETE` | `/articles/:id`       | Delete an article by ID           |
| `GET`    | `/showarticles`       | View all articles as an HTML page |
| `PUT`    | `/UpdateArticles/:id` | Update an article by ID           |

### Article Schema

```json
{
  "title": "String",
  "content": "String",
  "author": "String",
  "numberOfViews": "Number"
}
```

### Example Requests

**Create an article**

```bash
curl -X POST https://simple-backend-nodej-s.onrender.com/article \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Article",
    "content": "Hello, world!",
    "author": "Mohammed",
    "numberOfViews": 0
  }'
```

**Get all articles**

```bash
curl https://simple-backend-nodej-s.onrender.com/articles
```

**Get one article**

```bash
curl https://simple-backend-nodej-s.onrender.com/articles/ARTICLE_ID
```

**Delete an article**

```bash
curl -X DELETE https://simple-backend-nodej-s.onrender.com/articles/ARTICLE_ID
```

```bash
curl -X PUT https://simple-backend-nodej-s.onrender.com/UpdateArticles/ARTICLE_ID \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "content": "Updated content",
    "author": "Mohammed",
    "numberOfViews": 10
  }'
```

## Author

**Mohammed Diab**
