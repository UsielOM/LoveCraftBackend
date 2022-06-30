const {check} = require('express-validator');
const {validarCampos } = require('../midelware/validar-campos');
const {loginUsuario, cambiarPassword ,revalidarToken} = require('../controllers/auth');
const {validarJWT} = require('../midelware/validar-jwt');


module.exports= function(app){   

    app.post('/post/login',[
        check ('email','Wl email es obligatorio').isEmail(),
        check ('password','La contraseña es obligatoria').isLength({min:6}),
        validarCampos
    ],
    loginUsuario);

    app.put('/put/updatePass',[
        check ('email','El email es obligatorio').isEmail(),
        check ('password','La contraseña es obligatoria').isLength({min:6}),
        validarCampos
    ],
    cambiarPassword);

    app.get('/get/renew',validarJWT, revalidarToken);

}