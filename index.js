const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("JaatOG Addon Running 🚀");
});

app.get("/manifest.json", (req, res) => {
  res.json({
    id: "org.jaatog.addon",
    version: "1.0.0",
    name: "JaatOG Addon",
    description: "Personal Movies & Series",
    resources: ["stream", "meta"],
    types: ["movie", "series"],
    catalogs: []
  });
});

module.exports = app;
