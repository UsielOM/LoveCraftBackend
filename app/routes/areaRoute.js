const Area = require('../models/Tablas/Area.js');
module.exports = function(app, mysql) {
    app.post('/post/area', (request, response) => {
        mysql.postArea(request.body, function(result) {
            response.send(result);
        });
    });

    app.delete('/delete/area/:idArea', (req, res) => {
        Area.destroy({
            where: { idArea: req.params.idArea }
        }).then(result => {
            res.json(result);
        });
    });

    app.get('/get/areas', (req, res) => {
        mysql.getArea(function(result) {
            res.send(result);
        })
    })

    app.put('/put/area/:idArea', (req, res) => {
        Area.update({
            Nombre: req.body.Nombre
        }, {
            where: { idArea: req.params.idArea }
        }).then(result => {
            res.send(result);
        });
    });


}