
const {validarCampos } = require('../midelware/validar-campos');
const {loginUsuario, cambiarPassword } = require('../controllers/auth');



module.exports= function(app){   

    app.post('/post/login',loginUsuario);
    app.put('/put/updatePass',cambiarPassword)

}