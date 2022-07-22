const Interno = require('../models/Tablas/Interno');
const bcrypt = require('bcryptjs');
module.exports = function(app, mysql) {
    app.get('/get/internoss', (request, response) => {
        mysql.getInternos(function(result) {
            response.send(result)
        })
    })

    app.post('/post/interno', (request, response) => {
        mysql.postEmpleado(request.body, function(result) {
            response.send(result);

        })
    });

    app.post('/post/internos', (request, response) => {
        mysql.postInternos(request.body, function(result) {
            response.send(result);

        })
    });

    app.put('/put/interno', (req, res) => {
        mysql.putEmpleado(req.body, function(result) {
            res.send(result);
        })
    })



    app.get('/get/iu/:idUsuarios', (req, res) => {
        mysql.getInternoUser(req.params.idUsuarios, result => res.send(result));

    });


}