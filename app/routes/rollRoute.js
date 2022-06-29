module.exports = function(app, mysql) {
    app.post('/post/roll', (request, response) => {
        mysql.postRoll(request.body, function(result) {
            response.send(result);
        });
    });
}