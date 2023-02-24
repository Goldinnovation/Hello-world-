import express from "express"
import { PORT } from "./config/app.js"
import './config/database.js'
import userpage from './controller/name.js'
import hellopage from './controller/welcome.js'


const app = express()

app.listen(PORT,(req,res) => {
    console.log(`The server starts by ${PORT}`)
})


app.use(express.urlencoded({extended:true}))
app.use(express.static('view'))
app.set('view engine', 'ejs')
app.use(userpage)
app.use(hellopage)
