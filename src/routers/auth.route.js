const { Router } =require('express')
const { Register, Login } = require('../controllers/auth.controller')

const router=Router()

router.post('/auth/register',Register)

router.post('/auth/login',Login)




module.exports=router
