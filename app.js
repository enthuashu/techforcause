const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

var cookieParser = require('cookie-parser')
app.use(cookieParser())

require('./db/conn');
app.use(express.json());

app.use(require('./router/auth'))


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}


app.listen(`${port}`, () => {
    console.log(`Server is running at ${port}`)
})