const express = require("express")




const app = express()
app.use(express.json())
const port = 8000

app.listen(port , ()=>{
    console.log(`The server is running at the port ==> ${port}`)
})