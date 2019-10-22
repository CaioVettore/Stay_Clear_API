const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization

    //Operador not inverte os valores
    if (!authHeader) {
        return res.json({ error: "Token não informado" })
    }

   // Separeamos nosso token entre a hash e bearer pelo
    const [bearer, token] = authHeader.split(' ')
   
    try {
        //descriptografando nosso token
        const decoded = jwt.verify(token, '94a08da1fecbb6e8b46990538c7b50b2');
        
        //Passando o id para nossa aplicação
        req.userId = decoded.id

        return next()
        //console.log(decoded)
      } catch(err) {
        // err
      }

    // return next()
}