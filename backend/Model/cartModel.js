const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = Schema({
    userId:         { type: String},
    userEmail:      { type: String},
    productId:      { type: String},
    productName:    { type: String},
    productImage:   { type: String},
    productPrice:   { type: String},
    productQty:     { type: String},
});

/* global db */
module.exports = db.model('cart', cartSchema);