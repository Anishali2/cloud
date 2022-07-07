const model = require("../Model/cartModel");
const productModel = require("../Model/productModel");

exports.add = async (req, res, next) => {
  const data = req.body;
  const obj = {
    userId: data.userId,
    productId: data.productId,
  };
  const cart = await model.findOne(obj);
  const product = await productModel.findOne({ _id: data.productId });
  if (cart) {
    const total = Number(cart.productQty) + Number(data.productQty);
    if (product.qty >= total) {
      res.status(400).send({ status: "Error", message: "Not enough stock" });
    } else {
      console.log("Checking Value", Number(total));
      const updateProduct = await productModel.findByIdAndUpdate(
        data.productId,
        { qty: Number(product.qty) - Number(data.productQty) },
        { new: true }
      );
      const update = await model.findByIdAndUpdate(
        cart._id,
        { productQty: total },
        { new: true }
      );
      res.send(update);
      //
    }
  } else {
    try {
      const cart = await model.create(data);
      const updateProduct = await productModel.findByIdAndUpdate(
        data.productId,
        { qty: Number(product.qty) - Number(cart.productQty) },
        { new: true }
      );
      res.send(cart);
    } catch (err) {
      next(err);
    }
  }
};

exports.get = async (req, res, next) => {
  try {
    const cart = await model.find();
    res.send(cart);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  const id = req.params.id;
  // const newId = '62b3126ba8747827486f8bcc'
  const cart = await model.findById(id); // 1 Clear
  const productId = cart.productId;
  const product = await productModel.findById(productId); // 2 Clear
  const productQtyById = product.qty; // 3 Clear
  const cartQty = cart.productQty; // 4 Clear
  const newTotalQty = Number(cartQty) + Number(productQtyById); // 5 Clear
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      productId,
      { qty: newTotalQty },
      { new: true }
    ); // 6 Clear
    const deleteCart = await model.findByIdAndDelete(id); // 7 Clear
    const updatedCarts = await model.find();
    res.send(updatedCarts);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  const id = req.params.id; // 1: Getting user Id 
  const data = req.body.data; // 2: Getting user data like if user click on + 
  const cart = await model.findById(id); // 3: Getting cart data from mongoDB
  const product = await productModel.findById(cart.productId); // 4: Getting product data from mongoDB
  const cartQty = cart.productQty;  // 5: Getting cart qty
  const productQty = product.qty;  // 6: Getting product qty

  try {
    const newTotal = data  == 0?  cartQty - 1 : cartQty + 1; // 7: Calculating new total qty
    const productStock = data  == 0? productQty + 1 :productQty - 1;  // 8: Calculating new product stock
    if (productStock < 0) { // 9: Checking if product stock is less than 0
      console.log("Not Enough Stock =>", newTotal);
    } else {  // 10: If product stock is greater than 0
      if(newTotal >= 1 ){ // 11: Checking if new total qty is greater than 0

        const updateCart = await model.findByIdAndUpdate(id,{ productQty: newTotal },{ new: true }); // 12: Updating cart qty
        const updateProduct = await productModel.findByIdAndUpdate(cart.productId, 
          { qty: productStock },
          { new: true }
          ); // 13: Updating product qty
          const updatedCarts = await model.find(); // 14: Getting all carts
          res.send(updatedCarts); // 15: Sending all carts
        } else { // 16: If new total qty is less than 0
          res.status(400).send({ status: "Error", message: "Not enough stock" }); 
        }
    }
  } catch (err) {
    next(err);
  }

};
