
//creamos el modelo de base de datos

mongoose = require('mongoose');

var esquemaTripulante = mongoose.Schema({
	
	nombre: {
		type: String,
		required: true
		
	},
	
	email: {
		type: String,
		required: true
		
	},
	telefono:{
		type: String,
		required: true
		
	},
	create_date:{
		type:Date,
		default: Date.now
	}
	
	
});


var Tripulante = module.exports = mongoose.model('tripulante',esquemaTripulante);

module.exports.get = function (callback,limit){
	
	Tripulante.find(callback).limit(limit);
	
}