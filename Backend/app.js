const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
const app=express()
const cors=require('cors')
const cookieParser=require('cookie-parser') 
const userRoutes=require('./routes/user.route') 
const captainRoutes=require('./routes/captain.route')     
const connectToDb=require('./db/db')
connectToDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get('/',(req,res)=>{
     res.send('hello world')
})

app.use('/users',userRoutes)
app.use('/captains',captainRoutes)

module.exports=app; 
 