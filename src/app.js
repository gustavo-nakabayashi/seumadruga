const express = require("express");
const app = express();

const consign = require("consign");

consign({ cwd: "src" }).include("./config/middlewares.js").into(app);

app.get("/", (req, res) => {
  res.status(200).send();
});

app.get("/users", (req, res) => {
  const users = [{ name: "Gustavo Barros", email: "gustavo@email.com" }];
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  res.status(201).json(req.body);
});

module.exports = app;
