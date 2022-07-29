module.exports = function(app, mysql) {
    app.post('/post/usuarios', (request, response) => {
        mysql.postUsuarios(request.body, function(result) {
            response.send(result);
        })
    });

    app.get('/get/idmax/:Correo', (req, res) => {
        mysql.getMaximoUsers(req.params.Correo, result => res.send(result))
    });

    app.put('/put/usuario', (req, res) => {
        mysql.putUsuario(req.body, function(result) {
            res.send(result);
        })
    })

    app.delete('/delete/usuario/:idUsuarios', (req, res) => {
        mysql.deleteUsuario(req.params.idUsuarios, result => {
            if (result != null) {
                res.send(result);
            } else {
                res.status(400).send({ message: "El usuario no se pudo borrar " })
            }
        })
    })

    app.get('/get/userco/:Correo', (req, res) => {
        mysql.getUserCorreo(req.params.Correo, function(user) {
            res.send(user);
        })
    })

}