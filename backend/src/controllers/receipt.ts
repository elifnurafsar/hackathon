import { rejects } from "assert";
import { array } from "joi";
import { resolve } from "path";

var fs = require('fs')
var httpStatus = require('http-status');
var Jimp = require("jimp");
var QRCode = require('qrcode');
var qrCode = require('qrcode-reader');
var path = require('path');
var Receipt: any = require('../models/receipt');

const generateQR = async (text: string) => {
    try {
        await QRCode.toFile(path.join(__dirname, '..', '..', 'image', `${new Date().toISOString()}.png`), text);
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}

// const readQr = async (filePath: string) => {
//     try {
//         var img = await Jimp.read(fs.readFileSync(filePath));
//         var qr = new qrCode();
//         const value: any = await new Promise((resolve, reject) => {
//             qr.callback = (err: any, v: any) => err != null ? reject(err) : resolve(JSON.parse(v));
//             qr.decode(img.bitmap);
//         });
//         console.log(value.result);
//         return value.result;
//     }
//     catch (e: any) {
//         return e.message
//     }
// }
const readQr = async (filepath: string) => {
    const img = await Jimp.read(fs.readFileSync(filepath));
    const qr = new qrCode();
    return await new Promise((resolve, reject) => {
        qr.callback = (err: any, v: any) => err != null ? reject(err) : resolve(JSON.parse(v));
        qr.decode(img.bitmap);
    });
}


module.exports.GetReceipt = async (_: any, res: any) => {
    var data: any = await Receipt.find();
    res.status(httpStatus.OK).send(data);
}

module.exports.CreateReceipt = async (req: any, res: any) => {
    var receipt: any = new Receipt(req.body);
    await receipt.save();
    return res.status(httpStatus.CREATED).send(req.body);
}

module.exports.ReadQrImage = async (req: any, res: any) => {
    console.log(req.file);
    var file = path.join(__dirname, '..', '..', 'image', req.file.originalname)
    readQr(file)
        .then(data => {
            console.log(data);
        })
        .catch(console.log);
}
module.exports.GenerateQrImage = async (req: any, res: any) => {
    const istrue = await generateQR(JSON.stringify(req.body));
    if (istrue) {
        return res.status(httpStatus.CREATED).send({
            success: true
        })
    }
    else {
        return res.status(httpStatus.BAD_REQUEST).send({
            success: false
        })
    }
}