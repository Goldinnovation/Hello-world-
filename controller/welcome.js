import { Router } from "express";
import { User_name } from "../model/name.js";


const router = Router(); 

router.get("/greet-user/:id", async (req,res) => {
    let userid = req.params.id
    
    const userobj = await User_name.findOne({
        _id: userid
    })
     
    res.render('welcome', {
        userobj:userobj
    })
})


export default router 
