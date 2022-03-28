const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

var cookieParser = require("cookie-parser");
app.use(cookieParser());

require("./db/conn");

app.use(express.json());

const router = require("./router/auth");
app.use(router);

if (process.env.NODE_ENV !== "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(
      "/client/build/index.html",
      { root: __dirname },
      function (err) {
        if (err) {
          console.log(err);
          res.redirect("https://home2hospital.herokuapp.com/");
        }
      }
    );
  });
}

app.listen(`${port}`, () => {
  console.log(`Server is running at ${port}`);
});
