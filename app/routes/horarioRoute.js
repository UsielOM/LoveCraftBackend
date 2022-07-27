const { response } = require("express");

module.exports = function(app, mysql) {
    app.post('/post/horario', (request, response) => {
        mysql.postHorario(request.body, function(result) {
            response.send(result);
        })
    });


    app.get('/get/horarios', (req, res) => {
        mysql.getAreas(function(result) {
            res.send(result);
        })
    })
    app.post('/post/horario', (request, response) => {
        mysql.getHorario(request.body, function(result) {
            response.send(result);
            console.log(request.body.Fecha)
        })
    });
    app.get('/get/horarioss', (req, res) => {
        mysql.getHorarios(function(result) {
            res.send(result);
        })
    })

}