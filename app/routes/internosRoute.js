const Interno = require('../models/Tablas/Interno');
const bcrypt = require('bcryptjs');
const { Result } = require('express-validator');
module.exports = function(app, mysql) {
    app.get('/get/internoss', (request, response) => {
        mysql.getInternos(function(result) {
            response.send(result)
        })
    })

    //corregir
    app.get('/get/internoA/:idArea'), (req, res) => {
        mysql.getInternoUsuarioArea(req.params.idArea, result => res.send(result));
    }

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

    app.get('/get/iua/:idArea', (req, res) => {
        mysql.getInternoUsuarioArea(req.params.idArea, result => res.send(result));
    })

    app.delete('/delete/interno/:idUsuarios', (req, res) => {
        mysql.deleteInterno(req.params.idUsuarios, result => {
            if (result != null) {
                res.send(result);
            } else {
                res.status(400).send({ message: "El empleado no se pudo borrar " })
            }
        });
    });

    app.get('/get/internoco/:idUsuarios', (req, res) => {
        mysql.getInternoID(req.params.idUsuarios, function(interno) {
            res.send(interno);
        })
    })
}