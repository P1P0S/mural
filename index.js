const express = require("express");
const bodyParser = require("body-parser");

PORT = 5500;

const app = express();

//fake posts
let posts = [
  {
    id: "1234",
    title: "Teste do mural",
    description: "Descrição de teste",
  },
];

app.get("/all", (req, res) => {
  res.json(JSON.stringify(posts));
});

app.post("/new", bodyParser.json(), (req, res) => {
  let id = generateID();
  let title = req.body.title;
  let description = req.body.description;
  posts.push({ id: id, title: title, description: description });

  res.send("Post created");
});

app.listen(PORT, () => {
  console.log("server is running on:", PORT);
});

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}
