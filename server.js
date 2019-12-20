var express = require('express');
var app = express();
var restRouter = require('./routes/rest')
var redirectRouter = require('./routes/redirect')

app.use("/api/v1", restRouter);
// app.use("/:shortUrl", redirectRouter);

app.get("/api/v1/urls", function (req, res) {
    res.send("Hello World")
});

app.listen(3000);