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
        mysql.getAreas(function(result) {
            res.send(result);
        })
    })

    app.get('/get/area/:idArea', (req, res) => {
        mysql.getArea(req.params.idArea, result => res.send(result));
    });
    app.put('/put/area', (req, res) => {
        mysql.putArea(req.body, function(result) {
            res.send(result);
        });
    });


}