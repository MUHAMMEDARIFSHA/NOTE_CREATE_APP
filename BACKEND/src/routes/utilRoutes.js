const express = require('express')
const router = express.Router()


router.get('/ping',(req,res)=>{
 res.send('The server is running')
})


module.exports= router