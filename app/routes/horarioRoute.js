module.exports = function(app, mysql) {

    
    app.post('/post/horario', (req, res) => {
        mysql.postHorarioIsac(req.body, function(result) {
            res.send(result);
        });
    });

    app.get('/get/horarios', (req, res) => {
        mysql.getAreas(function(result) {
            res.send(result);
        })
    })


    app.get('/get/hoariointerno/:idInterno', (req, res) => {
        mysql.getHorarioIDEmpleadoIsac(req.params.idInterno, result => res.send(result))
    })


    app.get('/get/iu/:idUsuarios', (req, res) => {
        mysql.getInternoUser(req.params.idUsuarios, result => res.send(result));

    });
    app.get('/get/horarioss', (req, res) => {
        mysql.getHorarios(function(result) {
            res.send(result);
        })
    })

    app.post('/post/horariomar', (request, response) => {
        mysql.postHorarioOmar(request.body, function(result) {
            response.send(result);
            console.log(request.body.Fecha)
        })
    });

    app.put('/put/horario', (req, res) => {
        mysql.putHorario(req.body, function(result) {
            res.send(result);
        })
    })

    app.delete('/delete/hora/:idHorario', (req, res) => {
        mysql.deleteHorario(req.params.idHorario, result => {
            if (result != null) {
                res.send(result);
            } else {
                res.status(400).send({ message: "La hora no pudo ser eliminada  " });
            }
        })
    })

}