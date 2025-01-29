const express=require('express')
const app=express()
const jwt = require('jsonwebtoken')
const { auth } = require('./auth')
const cors=require('cors')
app.use(express.json())
app.use(cors())
const generateToken=(payload,key,expiresIn)=>{
    const Token=  jwt.sign(payload,key,{expiresIn:expiresIn})
    return Token
}

app.post('/login',(req,res)=>{
    const payload=req.body
    console.log(payload)
    res.send({access_Token:generateToken(payload,'access','1m'),refresh_Token:generateToken(payload,'refresh','2m')})
})

app.post('/newAccessToken',(req,res)=>{
    const refresh_token=req.body.refresh_token
    try{
        if(jwt.verify(refresh_token,'refresh')){
            res.send({access_token:generateToken(req.user,'access','2m')})
        }
    }catch(er){
        res.status(401).send({message:'Login Again'})
    }
})

app.use(auth)
app.get('/protected',(req,res)=>{
    res.send('you are in protected')
})

app.listen(3000,()=>{
    console.log(`server Listening ${3000}`)
})