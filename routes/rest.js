var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlService = require('../services/urlService');

router.post('/urls', jsonParser, function(req, res) {
    var longUrl = req.body.longUrl;
    var shortUrl = urlService.getShortUrl(longUrl);
    res.json({
        shortUrl: shortUrl,
        longUrl: longUrl
    })
})


// Api for a page shows short url and long url pairs
router.get("/url/:shortUrl", function(req, res) {
    var shortUrl = req.params.shortUrl;
    var longUrl = urlService.getLongUrl(shortUrl);
    res.json({
        shortUrl,
        longUrl,
    })
})

module.exports = router;