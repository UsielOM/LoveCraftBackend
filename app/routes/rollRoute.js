const Roll = require('../../app/models/Tablas/Roll');
module.exports = function(app, mysql) {

    app.post('/post/roll', (request, response) => {
        mysql.postRoll(request.body, function(result) {
            response.send(result);
        });
    });

    app.get('/get/roll/:idRoll', (req, res) => {
        mysql.getRoll({ idRoll: req.params.idRoll }, function(roll) {
            res.send(roll);
        })
    })

    app.get('/get/rolls', (req, res) => {
        mysql.getRolls(function(result) {
            res.send(result)
        })
    })

    app.put('/put/roll', (req, res) => {
        mysql.putRoll(req.body, function(result) {
            res.send(result);
        });
    });

    app.delete('/delete/roll/:idRoll', (req, res) => {
        Roll.destroy({
            where: { idRoll: req.params.idRoll }
        }).then(result => {
            res.json(result);
        });
    })


}