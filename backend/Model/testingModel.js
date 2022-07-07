const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const testSchema = Schema({
	owner: { type: Schema.Types.ObjectId, ref: 'user'},
	total: { type: Number, default: 0},
	items: [{
		item: { type: Schema.Types.ObjectId, ref: 'product'},
		quantity: { type: Number, default: 1},
		price: { type: Number, default: 1},
	}]
});


module.exports = db.model('test', testSchema);