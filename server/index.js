const express = require("express");
const cors = require("cors");
const simpleGit = require("simple-git");
const moment = require("moment");
const git = simpleGit();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/commit", async (req, res) => {
  // Set the base date to October 14, 2024, in ISO format
  const DATE = moment("2024-10-14T00:00:00Z")
    .add(Math.floor(Math.random() * 24), "hours") // Add random hours (0-23)
    .add(Math.floor(Math.random() * 60), "minutes") // Add random minutes (0-59)
    .toISOString(); // Convert to ISO 8601 string format

  // Log the generated DATE to the console for verification
  console.log("Generated DATE:", DATE);

  try {
    // Use the DATE in the commit command with the `--date` option
    await git.add("./*").commit("handle download error added", { "--date": DATE }).push("origin", "main");
    res.json({ message: "Changes pushed successfully!", date: DATE });
  } catch (err) {
    res.status(500).json({ error: "Failed to push changes", details: err });
  }
});

app.listen(4000, () => {
  console.log("Express server is running on http://localhost:4000");
});
