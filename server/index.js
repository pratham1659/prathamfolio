const express = require("express");
const moment = require("moment");
const simpleGit = require("simple-git");
const git = simpleGit();
const app = express();
const PORT = 4000;

app.post("/commit", async (req, res) => {
  const DATE = moment()
    .subtract(1, "M")
    .add(10, "d")
    .add(Math.floor(Math.random() * 24), "hours")
    .add(Math.floor(Math.random() * 60), "minutes")
    .format();

  const commitMessage = "new model file added";

  try {
    await git.add("./*").commit(commitMessage, { "--date": DATE }).push("origin", "main");
    res.send("Changes pushed successfully!");
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error in pushing changes");
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
