module.exports = function(tabla) {

        tabla.sync({ force: true }).then(() => {
            console.log("Tabla creada correctamente");

        }).catch((err) => {
            console.error("Error al crear la tabla: ", err);
        })



    }
    //Metodo para crear las tablas desde el backend