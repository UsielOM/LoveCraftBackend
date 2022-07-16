//Se declara la variable para almacenar las dependencias de express
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mySql = require('../app/models/DataBase/mySql');
const app = express();


const PORT = 3000;
var corsOptions = {
    origin: ["http://localhost:4200"]
}
app.use(cors(corsOptions));

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor listo y escuchando en localhost:${PORT}`);
    mySql.init();
})



require('../app/routes/loginRoutes')(app);
require('../app/routes/bienvenida')(app);
require('../app/routes/areaRoute')(app, mySql);
require('../app/routes/rollRoute')(app, mySql);
require('../app/routes/usuariosRoute')(app, mySql);
require('../app/routes/internosRoute')(app, mySql);
require("../app/routes/horarioRoute")(app, mySql);