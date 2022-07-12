//Se declara la variable para almacenar las dependencias de express
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mySql = require('../app/models/DataBase/mySql');
const app = express();

const PORT = 3000;
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor listo y escuchando en localhost:${PORT}`);
    mySql.init();
})

require('../app/routes/bienvenida')(app);
require('../app/routes/loginRoutes')(app);