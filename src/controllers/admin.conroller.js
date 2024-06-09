const isAuth = async(req, res, next) => {
    const data = await pg("select * from admin")
    try {
      const token = req.cookies.token;
      let yes = true
      const verify = jwt.verify(token);
     
      for (let i = 0; i < data.length; i++) {
        if (data[i].email == verify) {
          yes = false
          next();
        }  
      }
     if (yes) {
      res.status(400).json({message:'error'})
     }
    } catch (error) {
      res.status(400).json(error)
    }
  };



  const Login=async(req,res)=>{

    const { email,password}=req.body

  }


  module
 