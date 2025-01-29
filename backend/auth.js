const auth=(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send({ message: 'Unauthorized: No token provided' });
    }
    const accessToken=authHeader.split(' ')[1]
    try{
        const user=jwt.verify(accessToken,'access')
        if(user){
            req.user=user
            next()
        }
        
    }catch(er){
        res.status(401).send("session expired! generating the new token")
    }
}
module.exports={
    auth
}