const { res } = require ('express');
const {validationResult} = require('express-validator');

const loginUsuario  = async (req, res)=>{
    const {email,password }= req.body;
    res.status(201).json({
        ok:true,
        msg:'ruta login'
    })

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