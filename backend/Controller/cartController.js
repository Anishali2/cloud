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

exports.delete = async(req,res,next) => {
  const id = req.params.id;
  // const newId = '62b3126ba8747827486f8bcc'
  const cart = await model.findById(id);                     // 1 Clear
  const productId = cart.productId
  const product = await productModel.findById(productId);     // 2 Clear
  const productQtyById = product.qty                         // 3 Clear
  const cartQty = cart.productQty                           // 4 Clear
  const newTotalQty = Number(cartQty) + Number(productQtyById) // 5 Clear
  console.log("=.=.>",newTotalQty)
  try {
    const updateProduct = await productModel.findByIdAndUpdate(productId, {qty:newTotalQty},{new:true}); // 6 Clear
    const deleteCart = await model.findByIdAndDelete(id); // 7 Clear
    const updatedCarts = await model.find();
    res.send(updatedCarts)
  } catch (err) {
    next(err)
  }
}




