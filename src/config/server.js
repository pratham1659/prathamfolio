const express = require("express");
const moment = require("moment");
const simpleGit = require("simple-git");
const git = simpleGit();
const app = express();

app.post("/commit", async (req, res) => {
  const DATE = moment()
    .subtract(1, "M")
    .add(10, "d")
    .add(Math.floor(Math.random() * 24), "hours")
    .add(Math.floor(Math.random() * 60), "minutes")
    .format();

  const commitMessage = "new file added like Resume";

  try {
    await git.add("./*").commit(commitMessage, { "--date": DATE }).push("origin", "main");
    res.send("Changes pushed successfully!");
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error in pushing changes");
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));
