const express = require("express");
const cors = require("cors");
const simpleGit = require("simple-git");
const moment = require("moment");
const git = simpleGit();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/commit", async (req, res) => {
  const DATE = moment()
    .subtract(1, "M")
    .add(10, "d")
    .add(Math.floor(Math.random() * 24), "hours")
    .add(Math.floor(Math.random() * 60), "minutes")
    .format();

  try {
    await git.add("./*").commit("New model file added", { "--date": DATE }).push("origin", "main");
    res.json({ message: "Changes pushed successfully!", date: DATE });
  } catch (err) {
    res.status(500).json({ error: "Failed to push changes", details: err });
  }
});

app.listen(4000, () => {
  console.log("Express server is running on http://localhost:4000");
});
