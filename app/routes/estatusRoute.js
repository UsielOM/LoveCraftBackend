module.exports = function(app, mysql) {
    app.get('/get/estatus', (req, res) => {
        mysql.getEstatus(function(result) {
            res.send(result);
        })
    })
}