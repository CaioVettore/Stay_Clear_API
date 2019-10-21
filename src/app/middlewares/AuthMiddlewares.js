module.exports = async(req,res,next) =>{
    const authHeader = req.headers.authorization
    //Operador not inverte os valores
    if (!authHeader){
        return res.json({error: "Token não informado"})
    }
    return next()
}