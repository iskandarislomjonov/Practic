const express=require('express')
require('dotenv/config')
const cookie=require('cookie-parser')
const routers=require('./routers/index')
const config = require('../config')
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookie())

app.use(routers)



app.listen(config.port,()=>{
    console.log(`Server running port:${config.port}`)
})
