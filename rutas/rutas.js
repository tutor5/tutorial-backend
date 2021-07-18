let rutas = require('express').Router();;
rutas.get('/',function(req,res){
	res.json({
		status: 'api funcionando',
		message: 'bienvenido al tutorial'
		
		
	});
	
	
});

var controladorTripulante = require('../controladores/tripulante');

rutas.route('/tripulantes')
.get(controladorTripulante.index)
.post(controladorTripulante.new);

rutas.route('/tripulantes/:contact_id')
    .get(controladorTripulante.view)
    .patch(controladorTripulante.update)
    .put(controladorTripulante.update)
    .delete(controladorTripulante.delete);// Export API routes


module.exports = rutas;