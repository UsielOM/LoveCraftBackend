module.exports = function(app, mysql) {
    app.post('/post/cita', (request, response) => {
        mysql.postCita(request.body, function(result) {
            response.send(result);
        })
    });



}