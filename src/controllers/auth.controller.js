const pg = require("../libs/pg");
const {passCompare,passHash}=require("../libs/bcrypt");
const { sign } = require("../libs/jwt");






const Register = async(req,res)=>{
    try {
        const { name,email,password} = req.body;
    
        const findUser = await pg("select * from users where email = $1",email);
    
        if (findUser.length) {
            return res.status(403).json({message:'Bunday email  mavjud'})
           
        }
        else{   
        const hashPass = await passHash(password);
       const newUser=( await pg (`insert into users(name,password,email) values($1,$2,$3)`,
        name,
        hashPass,
        email))[0];
        
        res.status(201).json({message:"Succes Register"})
        
        }
        } catch (error) {
        res.status(400).json({message:error.message})
        }
        }
    
    
    const Login = async(req,res) => {
    try {
        
        const {email,password } = req.body;
        
        const findUser = (await pg("select * from users where email = $1",email))[0];
        
        if (!findUser) { 
            return  res.status(403).json({message:'Bunday foydalanuvchi mavjud emas.'})
        }
        
        const compare = await passCompare(password,findUser.password)
        if(!compare){
            return res.status(403).json({message:'Email yoki Password xato'})
        }
        console.log(findUser.id);
        const token = await sign(findUser.id);
        res.cookie('token',token)
        console.log(token);
        
        res.status(200).json({message:'Success'})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    }

    module.exports={
        Login,
        Register
    }