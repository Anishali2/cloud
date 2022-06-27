const model = require('../Model/productModel');

exports.add = async(req, res, next) => {

  console.log("Request",req.file)
  const data = req.body;
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
          res.redirect("http://localhost:3000/admin")
          // res.redirect()
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

exports.delete = async(req, res, next) => {
  const id = req.params.id;
  try {
      const product = await model.findByIdAndDelete(id);  
      res.send(product)
} catch (err) {
    next(err)
  }
}


exports.getProductById = async(req, res, next) => {
  const id = req.params.id;
  try {
    const product = await model.findById(id);
    res.send(product)
    
}
catch (err) {

    next(err)
}
}
