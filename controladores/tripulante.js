Tripulante = require('../modelos/tripulante');

exports.index = function (req,res){
	
Tripulante.get(function(err,tripulantes){
	
	if(err){
		
		res.json({
			status:"error",
			message:err
		});
	}
	res.json({
		status:"success",
		message:"tripulantes listados correctamente",
		data: tripulantes	
		
	});
	
	
});
	
};


exports.new = function (req, res) {
	
    var tripulante = new Tripulante();
    tripulante.nombre = req.body.nombre ? req.body.nombre : tripulante.nombre;
    tripulante.email = req.body.email;
    tripulante.telefono = req.body.telefono;
   // tripulante.phone = req.body.phone;
// save the tripulante and check for errors
    tripulante.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'nuevo tripulante creado!',
                data: tripulante
            });
    });
};


exports.view = function (req, res) {
    Tripulante.findById(req.params.tripulante_id, function (err, tripulante) {
        if (err)
            res.send(err);
        res.json({
            message: 'cargando detalles del tripulante..',
            data: tripulante
        });
    });
};
// Handle update tripulante info
exports.update = function (req, res) {
    Tripulante.findById(req.params.tripulante_id, function (err, tripulante) {
        if (err)
            res.send(err);
        tripulante.nombre = req.body.nombre ? req.body.nomobre : tripulante.nombre;
        tripulante.email = req.body.email;
        tripulante.telefono = req.body.telefono;
// save the tripulante and check for errors
        tripulante.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'creado nuevo tripulante!',
                data: tripulante
            });
    });
    });
};
// Handle delete tripulante
exports.delete = function (req, res) {
    Tripulante.remove({
        _id: req.params.tripulante_id
    }, function (err, tripulante) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'tripulante borrado'
        });
    });
};
