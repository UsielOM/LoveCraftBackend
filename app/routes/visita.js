const { getInternosPorArea } = require("../controllers/visita");

module.exports = function(app) {

    app.get('/getv', (request, response) => {
        response.send("Rutas para visita ");
    })

    // app.get('/get/interno',getInternosPorArea)
}