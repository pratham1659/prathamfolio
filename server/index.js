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
    .subtract(1, "M") // Subtract one month
    .subtract(1, "d") // Subtract one day
    .add(Math.floor(Math.random() * 24), "hours") // Add random hours (0-23)
    .add(Math.floor(Math.random() * 60), "minutes") // Add random minutes (0-59)
    .format(); // Format the date as a string

  // Log the generated DATE to the console
  console.log("Generated DATE:", DATE);

  // Return the generated DATE to the client (before pushing to Git)
  res.json({ message: "Generated date checked successfully", date: DATE });

  // Optionally, push the changes to git (you can remove this if you don't want to push)
  // try {
  //   await git.add("./*").commit("handle download error added", { "--date": DATE }).push("origin", "main");
  //   console.log("Git push successful!");
  // } catch (err) {
  //   console.log("Error during Git push:", err);
  // }
});

app.listen(4000, () => {
  console.log("Express server is running on http://localhost:4000");
});
