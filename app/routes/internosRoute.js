module.exports = function(app, mysql) {
    app.post('/post/internos', (require, response) => {
        mysql.postInternos(require.body, function(result) {
            response.send(result);
        })
    })
}