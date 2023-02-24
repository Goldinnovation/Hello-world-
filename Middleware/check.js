export const checkname = (req,res,next) => {
    if(!/^[a-zA-Z]+$/.test(req.body.username)){
     return res.status(400).send("Error404:Try Again :'(")
    }
    next()
 }