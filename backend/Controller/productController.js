const model = require('../Model/productModel');

exports.add = async(req, res, next) => {
  const data = req.body;
console.log(data)
  var newItem = {
    name: data.name,
    price: data.price,
    qty: data.qty,
    description: data.description,
    category: data.category,
    img:  req.file.originalname
  };


  try {
          const product = await model.create(newItem);
          res.send(product);  
  } catch (err) {
    next(err)
  }
};

exports.get = async(req, res, next) => {
  try {
    const product = await model.find();
    res.send(product)
} catch (err) {
    next(err)
  }
}


