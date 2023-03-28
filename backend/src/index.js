const express = require("express")
const route = require("./routes/route")
const mongoose = require("mongoose")

const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/",route)

mongoose.connect("mongodb+srv://SonuKumarYadav9:Sk957079%40@cluster0.9bcnwnf.mongodb.net/e-villageDB",{
    useNewUrlParser:true
})

.then(()=> console.log("MongoDb Connected"))
.catch((e)=> console.log(error))

app.get("/test",(req,res)=>{
    res.send("App is Running")
})

let port = 5000
app.listen(port,()=>{
    console.log("app is listening on port"+ port)
})