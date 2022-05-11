// 3rd Party Libs.
var express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// Node Libs
var path = require('path');
// Routes.
const receiptRoutes = require('./routers/receipt');
const userRoutes = require('./routers/user');
const shopRoutes = require('./routers/shop');
const productRoutes = require('./routers/product');
// Database
const db = require('./db');

dotenv.config();
db();
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
// Protection
app.use(helmet());
// Logging to console
app.use(morgan('tiny'));


app.use("/api/v1/receipt", receiptRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/shop", shopRoutes);
app.use("/api/v1/product", productRoutes);

// Listen
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
