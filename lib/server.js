//Se declara la variable para almacenar las dependencias de express
const express = require('express');
const mySql = require('../app/models/DataBase/mySql');
const app = express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor listo y escuchando en localhost:${PORT}`);
    mySql.init();
})

require('../app/routes/bienvenida')(app);

require('../app/routes/areaRoute')(app, mySql);
require('../app/routes/rollRoute')(app, mySql);
require('../app/routes/usuariosRoute')(app, mySql);
require('../app/routes/internosRoute')(app, mySql);