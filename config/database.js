import { MONGODB_URI } from "./app.js";
import mongoose from "mongoose";

mongoose.set('strictQuery', true)
mongoose.connect(MONGODB_URI)
.then(() => console.log('Database is connected'))
.catch( error => console.error(error))

export const db = mongoose.connection