module.exports = function(app, mysql) {
    // app.post('/post/horario', (request, response) => {
    //     mysql.postHorario(request.body, function(result) {
    //         response.send(result);
    //     })
    // });


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
        // app.post('/post/horario', (request, response) => {
        //     mysql.getHorario(request.body, function(result) {
        //         response.send(result);
        //         console.log(request.body.Fecha)
        //     })
        // });

    app.get('/get/hoariointerno/:idInterno', (req, res) => {
        mysql.getHorarioIDEmpleadoIsac(req.params.idInterno, result => res.send(result))
    })

    app.get('/get/horarioHoy/:idInterno', (req, res) => {
        const Fecha = req.body.Fecha
        mysql.getHorarioFechaIsac(req.params.idInterno, Fecha, result => res.send(result));
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


}