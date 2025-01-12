/* eslint no-undef: 0 */
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const error = require("./api/middlewares/errors");
const bodyParser = require("body-parser");
const multer = require("multer");
const os = require("os");

var indexRouter = require("./api/routes/index");
var app = express();

// for req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// for form-data
app.use(multer({ dest: os.tmpdir() }).any());

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
