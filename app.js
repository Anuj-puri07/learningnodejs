const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.listen(2900,function (){
    console.log("Backend has started at port 2900")
})

app.get("/",(req,res)=>{
    res.send("this is my home page")
})

app.get("/contact",(req,res)=>{
    res.render("contact", {age : 23, name : "about"})
})

app.get("/land", (req,res)=>{
    let name ="ANuj puri"
    res.render("haha", {firstname : name})
})
app.get("/aboutt", (req,res)=>{
    res.render("about")
})