const express = require("express");
const config = require("./config");
const axios = require("axios");
const path = require("path");

const app = express();

// weather api
app.get("/weather/:city", async (req, res) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${config.secret}`;
  const response = await axios.get(URL);
  console.log(response.data);

  res.json(response.data);
});

// static files
app.use(express.static(path.join(__dirname, "static")));

app.listen(3000);
console.log("Server on port 3000");