import { Router } from "express";
import { User_name } from "../model/name.js";
import {body, validationResult} from 'express-validator'; 
import { checkname } from "../Middleware/check.js";


const router = Router(); 


router.get("/", (req,res) => {

    res.render('index')
})

router.post("/",checkname,body('username').isString().escape(),async (req,res) => {
    let Uname = req.body.username
    console.log(typeof Uname)
    try{
        validationResult(req).throw()
        
    const user = new User_name({
        username: Uname
    })
    await user.save()
   
    const foundobj = await User_name.findOne({
        // username: Uname
        _id: user.id
    }).exec()
    
    res.redirect(`/greet-user/${foundobj.id}`)

    }catch(error){
        console.error(error)
        res.send('Error404: Please try again :(')
    }
})


export default router