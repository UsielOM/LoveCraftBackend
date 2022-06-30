const { response } = require ('express');
const {validationResult} = require('express-validator');
const sequelize = require('../models/DataBase/configDb');


const loginUsuario  = async (req, res)=>{
    const {email,password }= req.body;
    try{
        //validar usuario
        const dbUser = await sequelize.query(
            "Select b.Correo, a.Contraseña, c.estatus from interno a inner join usuarios b on a.idUsuarios  = b.idUsuarios inner join estatus c on a.idEstatus = c.idEstatus where b.Correo = '"+email+"'; ",
            {
                type: sequelize.QueryTypes.SELECT
            });
        
            if(dbUser >= 0){
                return res.status(400).json({
                    ok:false,
                    msg:'El correo no existe',
                    user: dbUser
                })
            }
        //validar contraseña

        return  res.json({
            ok: true,
            msg:'ruta login',
            datos: dbUser
         });
    }catch(error)
    {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const cambiarPassword = async(req, res= response)=> {
    const {email,password}= req.body;

    res.status(201).json({
        ok:true,
        msg:'ruta cambiar password'
    })
}

module.exports = {
    loginUsuario,
    cambiarPassword
}