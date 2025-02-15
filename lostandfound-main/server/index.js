const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Registration = require("./models/registrations")

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/lostandfound');

app.post("/lostitems",(req,res) =>{
    Registration.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


app.get("/getlostitems",(req,res) =>{
    Registration.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001, ()=>{
    console.log("server is running")
})