const pg = require("../libs/pg");


const getUsers=async(req,res)=>{
  try {
    
    const users=await pg(`SELECT * FROM users;`)

    res.status(201).json({msg:"all users:",data:users})


  } catch (error) {
    
    res.status(404).json({message:`${error.messaga}`})

  }
}

  const updateUsers=async(req,res)=>{

try {
const {id}=req.params;

const {name}=req.body;

await pg(`UPDATE users SET name=$1 WHERE id=$2`,
name,
id)

res.status(201).json({msg:"Updated users successfully"})

} catch (error) {
  res.status(404).json({messaga:`${error.messaga}`})
  
}
  }

  const deleteUsers=async(req,res)=>{

try {
  const {id}=req.params
  await pg(`DELETE FROM users WHERE id=$1 ;`,id)
  res.status(201).json({message:"deleted usets successfully"})
} catch (error) {

  res.status(404).json({msg:`${error.message}`})
  
}
  }


  module.exports={
    getUsers,
    updateUsers,
    deleteUsers
  }

