var express = require('express');
var productController = require('../controllers/product')
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: Function) {
        cb(null, './uploads/');
    },
    filename: function (req: any, file: any, cb: Function) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});
var fileFilter = (req: any, file: any, cb: Function) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false)
    }
}

var upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

router.route('/')
    .get(productController.GetProduct)
    .post(upload.single('productImage'), productController.CreateProduct)

module.exports = router;