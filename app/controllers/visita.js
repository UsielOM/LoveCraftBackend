const { response, query } = require ('express');
const sequelize = require('../models/DataBase/configDb');
const Interno = require('../models/Tablas/Interno');


const getInternosPorArea = async(req, res= response)=> {
    const idArea= req.header('idArea');
    try {
         const Interno =  await sequelize.query(
            "select b.Nombre, a.idInterno from interno a inner join usuarios b on a.idUsuarios = b.idUsuarios inner join area c on c.idArea = a.idArea where a.idArea =  '"+idArea+"'; ",
            {
                type: sequelize.QueryTypes.SELECT
            });        
      
            console.log(Interno)
        return res.status(201).json({
            ok: true,
            msg: 'Se obtiene el area',
            Interno,//.idInterno,
            //Nombre: dbuser.Nombre
        });
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
            
        });
    }   

}

module.exports = {
    getInternosPorArea
}