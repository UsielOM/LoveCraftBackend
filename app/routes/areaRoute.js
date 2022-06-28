module.exports = function(app, myslq) {
    app.post('/post/area', (request, response) => {
        myslq.postArea(request.body(), function(result) {
            response.send(result);
        });
    });
}