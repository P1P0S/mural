const express = require("express");
const bodyParser = require("body-parser");
const posts = require("./model/posts");

PORT = 5500;

const app = express();

app.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

app.post("/new", bodyParser.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);

  res.send("Post created");
});

app.listen(PORT, () => {
  console.log("server is running on:", PORT);
});
