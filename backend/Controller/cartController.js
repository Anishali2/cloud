const model = require('../Model/cartModel');
const productModel = require('../Model/productModel');

exports.add = async(req, res, next) => {
  const data = req.body;
  const obj = {
    userId: data.userId,
    productId: data.productId
  }
  const cart = await model.findOne(obj);
  const product = await productModel.findOne({_id:data.productId});
  if(cart) {
        const total =  Number(cart.productQty) + Number(data.productQty);
    if (total > product.qty) {
      res.status(400).send({status:"Error",message:"Not enough stock"});
    }else {
      console.log("Checking Value",Number(total))
      const updateProduct = await productModel.findByIdAndUpdate(data.productId, {qty: Number(product.qty) - Number(data.productQty)},{new:true});
      const update = await model.findByIdAndUpdate(cart._id, {productQty:total},{new:true});
      res.send(update);
    }
  }else {
    try {
      const cart = await model.create(data);
      const updateProduct = await productModel.findByIdAndUpdate(data.productId, {qty:Number(product.qty) - Number(cart.productQty)},{new:true});
      res.send(cart);  
    } catch (err) {
      next(err)
    }
  }
};

exports.get = async(req, res, next) => {
  try {
    const cart = await model.find();
    res.send(cart)
} catch (err) {
    next(err)
  }
}


