const express = require("express");
const bodyParser = require("body-parser");
const posts = require("../model/posts");
const router = express.Router();

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", bodyParser.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);

  res.send("Post created");
});

module.exports = router;
