var httpStatus = require('http-status');
var Product: any = require('../models/product');



module.exports.GetProduct = async (_: any, res: any) => {
    var product = await Product.find();
    return res.status(httpStatus.OK).send(product);
}

module.exports.CreateProduct = async (req: any, res: any) => {
    console.log(req.file);

    var body: any = {
        name: req.body.name,
        category: req.body.category,
        price: parseInt(req.body.price),
        taxRatio: parseInt(req.body.taxRatio),
        imagePath: req.file.filename
    }
    console.log(body)
    // var product = new Product(req.body);
    // await product.save()
    return res.status(httpStatus.CREATED).send(body);
}