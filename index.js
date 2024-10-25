const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/cv", (req, res) => {
  const filePath = path.join(__dirname, "public", "pdf", "Fian Kurniawan.pdf");
  res.download(filePath, "cv.pdf", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("File download failed.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});
