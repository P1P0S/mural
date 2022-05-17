const express = require("express");
const path = require("path");
const apiRoute = require("./routes/api");

PORT = 5500;

const app = express();

app.use("/api", apiRoute); // essa linha deve ser chamada primeiro
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
