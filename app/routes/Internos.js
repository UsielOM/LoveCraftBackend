module.exports = function(app, mysql) {
    app.get('/interno', (request, response) => {
        mysql.getInternos(function(result) {
            response.send(result);
        })
    })
}