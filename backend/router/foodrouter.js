import express from 'express'
import { addfood,listfood,removeFood } from '../controller/Foodcontroller.js'
import multer from 'multer'


const foodrouter=express.Router();

//Image storage engine
const storage=multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
return cb(null,` ₹{Date.now()} ₹{file.originalname}`)
    }
})


const upload=multer({storage:storage})

//post is ude a dat to server ...it analysis ....sends response
foodrouter.post('/add',upload.single("image"),addfood)
foodrouter.get('/list',listfood)
foodrouter.post('/remove',removeFood);



export default foodrouter;