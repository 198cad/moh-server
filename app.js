const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/nfc/:id/:logtype", (req, res) => {
  const { id, logtype } = req.params;
  res.json({ id, logtype }).status(200);
});

app.listen(2000, () => {
  console.log("server jalan pada port 2000");
});
