module.exports = function(app) {
    app.get('/', (request, response) => {
        response.send("BackEnd de LoveCraft funcionando ");
    })
}