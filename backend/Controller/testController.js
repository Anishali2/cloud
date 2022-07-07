const model = require('../Model/testingModel');
// const userModel = require('../Model/userModel');
// const cartModel = require('../Model/cartModel');
// const productModel = require('../Model/productModel');
// const orderModel = require('../Model/orderModel');


exports.add = async (req, res, next) => {
    const data = req.body;
    // const obj = {
    //     owner: data.owner,
    //     total: data.total,
    //     items: data.items,
    // };
    // insert hard code for test
    // res.send('Working')
    const obj = {
        user: '62b2e98c0f85a6bd00901533',
        total: 0,
        items: [{
            item: '62be85ebb88a0580a1210c24',
            quantity: 1,
            price: 1,
        }]
    }

    


    
        try {
        const test = await model.create(obj);
        res.send(test);
        } catch (err) {
        next(err);
        }
    }
    
    exports.get = async (req, res, next) => {
        try {
            const test = await model.find().populate(['user','items.item']); 
        res.send(test);
        } catch (err) {
        next(err);
        }
    }
    