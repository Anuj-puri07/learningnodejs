const express = require("express")
const app = express()
const db= require("./database/db")
const bcrypt = require("bcrypt")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



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

app.get("/register", (req,res)=>{
    res.render("authentication/register")
})

app.post("/register", async (req,res) => {
    const{firstname,lastname,email,password,confirmpassword} = req.body
    if(password !==confirmpassword){
        res.send("password Doesn't match")
    }

    await db.infos.create({
        firstname,
        lastname,
        email,
        password: bcrypt.hashSync(password,10)
    })

})

app.get("/addtodo", (req,res) =>{
    res.render("todo/addtodo")
})

app.post("/addtodo", async (req,res) =>{
    const {task,date,description} = req.body

    await db.todos.create({
        task: task,
        description: description,
        date : date
    })

    res.redirect("/aboutt")
})

app.listen(2900,function (){
    console.log("Backend has started at port 2900")
})
