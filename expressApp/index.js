const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");
const routes = require("./routes");
require("dotenv").config();
require("./config/db");
const PORT = process.env.PORT || 8080;

const app = express();
const server = https.createServer(option, app);
app.use(bodyParser.json());

server.use("/api/v1", routes);

const options = {
  key: fs.readFileSync(path.join(__dirname, "localhost-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "localhost.pem")),
};

server.listen(PORT, () => {
  console.log("server started at " + PORT);
});

// Render your custom 404 page
server.use((req, res, next) => {
  res.status(404).send("not found");
});

server.get("/", (req, res) => {
  console.log("listing to get router");
  res.send({ data: "hello there!!" });
});
