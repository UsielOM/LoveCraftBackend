const { response } = require ('express');
const sequelize = require('../models/DataBase/configDb');
const bcrypt = require('bcryptjs');
const Interno = require('../models/Tablas/Interno');
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
    let pw2;

    try {
    //validar usuario
        const dbUser = await sequelize.query(
        "Select b.Correo, a.Contraseña, c.estatus, b.Nombre, a.idInterno  from interno a inner join usuarios b on a.idUsuarios  = b.idUsuarios inner join estatus c on a.idEstatus = c.idEstatus where b.Correo = '"+email+"'; ",
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
        //hashear la contraseña
        const salt = bcrypt.genSaltSync();
        pw2 = bcrypt.hashSync(password,salt);

        //crear JWT
        const token = await generarJWT(dbUser[0].Nombre,email);

        console.log(pw2,dbUser[0].idInterno)

        //Generar el update a la tabla
        //pendiente
        Interno.update({
            Contraseña : pw2
        },{
            where:{
                idInterno : dbUser[0].idInterno
            }
        }).then(result=>{
            console.log(result)
        })
        

        return res.status(201).json({
            ok: true,
            msg: 'Se cambio la contraseña',
            pw: pw2,
            email,
            dbUser,
            token,
        });
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

   
}

const revalidarToken = async (req, res=response) => {

    const {name, email} = req;
    //Gwenerar token
    const token = await generarJWT(name, email);


    return res.json({
        ok: true,
        msg : 'Renew',
        name,
        email,
        token
    })

}


module.exports = {
    loginUsuario,
    cambiarPassword,    
    revalidarToken
}