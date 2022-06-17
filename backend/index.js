const express     = require('express');
const mongoose    = require('mongoose');
const app = express();
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const uri = "mongodb+srv://root:root@cluster0.svymrvz.mongodb.net/Ecommerce?retryWrites=true&w=majority";
global.db = mongoose.createConnection(uri);
require('dotenv').config();
const cors = require('cors')

// 
app.use(express.static(__dirname + '/uploads/'));
app.use(cookieParser());
app.use(cors({useCredentials: true}));
app.use(bodyParser.json());


const userRoutes = require('./Routes/userRoutes');
app.use('/user', userRoutes);

const productRoutes = require('./Routes/productRoutes');
app.use('/product', productRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
