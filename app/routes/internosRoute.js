const Interno = require('../models/Tablas/Interno');
module.exports = function(app, mysql) {

    app.post('/post/internos', (require, response) => {
        mysql.postInternos(require.body, function(result) {
            response.send(result);
        })
    });

    app.get('/get/internos', (require, response) => {
        mysql.getInternos(function(result) {
            response.send(result)
        })
    })


    app.put('/put/interno/:idInterno', (req, res) => {
        Interno.update({
            Nombre: req.body.Nombre,
            Direccion: req.body.Direccion,
            Edad: req.body.Edad,

        }, {
            where: { idInterno: req.params.idInterno }
        }).then(result => {
            res.send(result);
        });
    });

    app.delete('/delete/interno/:idInterno', (req, res) => {
        Interno.destroy({
            where: { idInterno: req.params.idInterno }
        }).then(result => {
            res.json(result);
        });
    })

}