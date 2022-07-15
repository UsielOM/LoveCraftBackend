const jwt = require('jsonwebtoken');

const generarJWT = (name, email) => {
    const  payload ={name, email};

    return new Promise((resolve, reject) =>{

        
        jwt.sign( payload, process.env.SECRET_JWT_SEED,
            {
            expiresIn: '2h'
            },
            (err, token)=>{
            if (err){
                //todo bien
                console.log(err);
                reject(err);
            }else{
                //todo bien
                resolve(token)
            }
        })
    });
}


module.exports={
    generarJWT
}