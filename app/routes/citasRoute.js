module.exports = function(app, mysql) {
    app.post('/post/cita', (request, response) => {
        mysql.postCita(request.body, function(result) {
            response.send(result);
        })
    });

    app.get('/get/citas/:idInterno', (req, res) => {
        mysql.getCitas(req.params.idInterno, result => res.send(result))
    })

    app.get('/get/citas', (req, res) => {
        mysql.getTableCitas(function(result) {
            res.send(result)
        })
    })

    app.get('/get/horarios', (req, res) => {
        mysql.getHorario(function(result) {
            res.send(result);
        })
    })

    app.get('/get/cita/:idCitas', (req, res) => {
        mysql.getCitasId(req.params.idCitas, result => res.send(result));
    })

    app.delete('/delete/cita/:idCitas', (req, res) => {
        mysql.deletCita(req.params.idCitas, result => {
            if (result != null) {
                res.send(result);
            } else {
                res.status(400).send({ message: "La cita no se pudo borrar" });
            }
        })
    })
    app.get('/get/citauserid/:idUsuarios', (req, res) => {
        mysql.getCitaIdUser(req.params.idUsuarios, result => res.send(result));
    })


}