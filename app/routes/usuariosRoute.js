module.exports = function(app, mysql) {
    app.post('/post/usuarios', (request, response) => {
        mysql.postUsuarios(request.body, function(result) {
            response.send(result);
        })
    })
}