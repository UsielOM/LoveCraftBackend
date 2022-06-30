const { response } = require ('express');
const {validationResult} = require('express-validator');
const sequelize = require('../models/DataBase/configDb');
const bcrypt = require('bcryptjs')
const {generarJWT} = require('../helpers/jwt');


const loginUsuario  = async (req, res)=>{
    const {email,password }= req.body;
    try{
        //validar usuario
        const dbUser = await sequelize.query(
            "Select b.Correo, a.Contraseña, c.estatus, b.Nombre from interno a inner join usuarios b on a.idUsuarios  = b.idUsuarios inner join estatus c on a.idEstatus = c.idEstatus where b.Correo = '"+email+"'; ",
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
        const  validPassword = bcrypt.compareSync(password, dbUser[0].Contraseña);
        if(!validPassword ){
            return res.status(400).json({
                ok:false,
                msg:'El password no es valido'
            });
        }

        //crear JWT
        const token = await generarJWT(dbUser.Nombre,email);


        return  res.json({
            ok: true,
            msg:'ruta login',
            datos: dbUser,
            token
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