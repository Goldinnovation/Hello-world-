import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
    username: {type:String, required: true}
})

export const User_name =  new mongoose.model('User_name', nameSchema)