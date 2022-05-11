var express = require('express');
var shopController = require('../controllers/shop');
var router = express.Router();

router
    .route("/")
    .get(shopController.GetShop)
    .post(shopController.CreateShop);

module.exports = router;