module.exports = function(app, mysql) {
    app.post('/post/usuarios', (request, response) => {
        mysql.postUsuarios(request.body, function(result) {
            response.send(result);
        })
    });

    app.get('/get/idmax', (req, res) => {
        mysql.getMaximoUsers(function(result) {
            res.send(result)
        })
    });

}