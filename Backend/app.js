const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
let { PythonShell } = require("python-shell");

const port = 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.post("/", async (req, res) => {
  const filename = req.files.result.name;
  const file = req.files.result;
  const uploadPath = __dirname + "/uploads/" + filename;

  try {
    await file.mv(uploadPath);
    console.log("File uploaded successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/run-python-script", (req, res) => {
  PythonShell.run("script.py", null).then((messages) => {
    console.log("Result pdf analyzed successfully");
    console.log("Result CSV generated");
  });
  res.json({
    message: "Python script executed successfully",
    output: messages,
  });
});

app.get("/download", (req, res) => {
  res.download("./result.csv");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
