const express = require("express");
const bodyParser = require("body-parser");

PORT = 5500;

const app = express();

//fake posts
let posts = [
  {
    id: "ladksjflk",
    title: "Teste do mural",
    description: "Descrição de teste",
  },
];

app.get("/all", (req, res) => {
  res.json(JSON.stringify(posts));
});

app.post("/new", (req, res) => {});

app.listen(PORT, () => {
  console.log("server is running on:", PORT);
});
