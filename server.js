import express from "express";
import sum from "./sum.js";

const app = express();

app.get("/", (req, res) => {
  res.send("This is the home page of the demo page");
});

app.get("/sum/:a/:b", (req, res) => {
  const { a, b } = req.params;

  res.json({
    result: sum(parseInt(a), parseInt(b)),
  });
});

app.get("/greeting/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name || "stranger"}!`);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
