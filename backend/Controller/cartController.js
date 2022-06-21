const model = require('../Model/cartModel');
const productModel = require('../Model/productModel');

exports.add = async(req, res, next) => {
  const data = req.body;
  const obj = {
    userId: data.userId,
    productId: data.productId
  }
  const cart = await model.findOne(obj);
  if(cart) {
  const product = await productModel.findOne({_id:data.productId});
        const total =  Number(cart.productQty) + Number(data.productQty);
    if (total > product.qty) {
      res.status(400).send({status:"Error",message:"Not enough stock"});
    }else {
      const newObj = {...cart,
        productQty:555
            
      }
     const {userId , productId , productName , productImage , productPrice , productQty} = cart;
      console.log(newObj)
      // const update = await model.updateOne(cart._id,)

    }
  }else {
    try {
      const cart = await model.create(data);
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


