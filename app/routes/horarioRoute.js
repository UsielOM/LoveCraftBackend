module.exports = function(app, mysql) {
    app.post('/post/horario', (request, response) => {
        mysql.postHorario(request.body, function(result) {
            response.send(result);
        })
    });



}