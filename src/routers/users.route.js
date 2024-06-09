const { getUsers, deleteUsers, updateUsers } = require('../controllers/users.controller')
const isAuth = require('../middilwares/isAuth')

const router=require('express').Router()

router.get('/users',isAuth,getUsers)

router.put("/users/:id",isAuth,updateUsers)

router.delete("/users/:id",isAuth,deleteUsers)



module.exports=router
