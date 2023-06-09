const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 8000;
const database = require("./src/model/database");
const router = require("./src/router/web.router");

app.set("view engine", "ejs");
app.set("views", path.join("./src/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

database.connectDB().connect((err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`DB connected!`);
  }
});

app.use(router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
