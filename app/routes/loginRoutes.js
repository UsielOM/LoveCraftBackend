
const {validarCampos } = require('../midelware/validar-campos');
const {loginUsuario, cambiarPassword ,revalidarToken} = require('../controllers/auth');
const {validarJWT} = require('../midelware/validar-jwt');



module.exports= function(app){   

    app.post('/post/login',loginUsuario);
    app.put('/put/updatePass',cambiarPassword);
    app.get('/get/renew',validarJWT, revalidarToken);

}