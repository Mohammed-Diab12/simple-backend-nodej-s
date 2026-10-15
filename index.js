require("dotenv").config();
const express = require("express");
const dns = require("node:dns");
const Article = require("./models/Article");
// Work around Node.js DNS SRV resolution issues
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());

app.get("/", (req, res) => {
  res.render("home.ejs", {
    age: req.query.age,
    ID: req.query.id,
    user: { name: "Mohammed Diab" },
  });
});

app.get("/testparam/:id/:name", (req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  res.send(`This is the test param page with ID: ${id} and Name: ${name}`);
});

app.get("/test", (req, res) => {
  console.log(req.query);
  const id = req.query.id;
  const name = req.query.name;
  res.send(
    `This is the test page: Name: ${name}, ID: ${id} , Age:${req.query.age}`,
  );
});

app.post("/testPost", (req, res) => {
  res.send("This is the post test page");
});

app.delete("/testDelete", (req, res) => {
  res.send("This is the delete test page");
});

app.put("/testPut", (req, res) => {
  res.send("This is the put test page");
});

app.post("/article", async (req, res) => {
  const { title, content, author, numberOfViews } = req.body;
  const article = new Article();
  article.title = title;
  article.content = content;
  article.author = author;
  article.numberOfViews = numberOfViews;

  try {
    await article.save();
    res.json(article);
    return;
  } catch (error) {
    console.log("error in adding the article to the database");
  }
});

app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    console.log(articles);
    res.json(articles);
    return;
  } catch (error) {
    console.error("error in getting the articles" + error);
  }
});

app.get("/articles/:artID", async (req, res) => {
  const id = req.params.artID;
  try {
    const article = await Article.findById(id);
    res.json(article);
    return;
  } catch (error) {
    console.error("error in getting article" + error);
  }
});

app.delete("/articles/:artID", async (req, res) => {
  const id = req.params.artID;
  try {
    const deletedArt = await Article.findByIdAndDelete(id);
    res.json(deletedArt);
    return;
  } catch (error) {
    console.error("error in deleting the article" + error);
  }
});

app.get("/showarticles", async (req, res) => {
  try {
    const allArticles = await Article.find();
    res.render("Articles.ejs", {
      Articles: allArticles,
    });
  } catch (error) {
    console.error("error in showArticles page", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
