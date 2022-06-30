const Interno = require('../models/Tablas/internos');
module.exports = function(app, mysql) {

    app.put('/put/interno/:idInterno', (req, res) => {
        Interno.update({
            Nombre: req.body.Nombre,
            Direccion: req.body.Direccion,
            Edad: req.body.Edad,

        },
        {
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