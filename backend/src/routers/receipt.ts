var express = require('express');
var receiptController = require('../controllers/receipt')
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: Function) {
        cb(null, './temp/');
    },
    filename: function (req: any, file: any, cb: Function) {
        cb(null, `${new Date().toISOString()}.png`);
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
    .get(receiptController.GetReceipt)
    .post(receiptController.CreateReceipt);
router.route('/createqr')
    .post(receiptController.GenerateQrImage);
router.route('/readqr')
    .post(upload.single('qrImage'), receiptController.ReadQrImage);

module.exports = router;