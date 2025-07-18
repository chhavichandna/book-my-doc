import jwt from 'jsonwebtoken'

//user auth middleware
const authUser = async (req,res,next) =>{
    try{
       const {token} = req.headers
       if (!token) {
        return res.json ({success:false,message:'Not Authorized Login Again'})
       }
       const token_decode = jwt.verify(token,process.env.JWT_SECRET)
    //    req.body.userId = token_decode.id
    req.user = { userId: token_decode.id }

       next()
       
    } catch(error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


export default authUser

// const authUser = async (req, res, next) => {
//     try {
//         const { token } = req.headers;
//         if (!token) {
//             return res.json({ success: false, message: 'Not Authorized. Login Again' });
//         }

//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);

//         // ✅ Use req.user to store userId
//         // req.user = { userId: token_decode.id };
//             req.userId = token_decode.id;

//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export default authUser;