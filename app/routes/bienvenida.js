module.exports = function(app) {
    app.get('/', (request, response) => {
        response.send("BackEnd de LoveCraft funcionando ");
    })



    app.post('/crear', (request, response) => {
        response.send("BackEnd de LoveCraft funcionando ");
    })

    app.delete('/borrar', (request, response) => {
        response.send("BackEnd de LoveCraft funcionando ");
    })

    app.put('/actualizar', (request, response) => {
        response.send("BackEnd de LoveCraft funcionando ");
    })



}