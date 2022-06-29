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
    })


}