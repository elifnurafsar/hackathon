var httpStatus = require('http-status');
var Shop: any = require('../models/shop');

module.exports.GetShop = async (_: any, res: any) => {
    var data: any = await Shop.find();
    return res.status(httpStatus.OK).send(data);
}

module.exports.CreateShop = async (req: any, res: any) => {
    var shopData: any = req.body;
    const newShop = new Shop(shopData);
    await newShop.save();
    return res.status(httpStatus.CREATED).send(shopData);
}