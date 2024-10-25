const express = require("express");
const moment = require("moment");
const simpleGit = require("simple-git");
const git = simpleGit();

const app = express();
const PORT = 4000;

app.post("/commit", async (req, res) => {
  const DATE = moment()
    .subtract(1, "M")
    .subtract(1, "d")
    .add(Math.floor(Math.random() * 24), "hours")
    .add(Math.floor(Math.random() * 60), "minutes")
    .format();

  const commitMessage = "new model file added";

  try {
    await git.add("./*").commit(commitMessage, { "--date": DATE }).push("origin", "main");
    res.json({ message: "Changes pushed successfully!", date: DATE });
  } catch (error) {
    res.status(500).json({ message: "Error committing changes", error });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
