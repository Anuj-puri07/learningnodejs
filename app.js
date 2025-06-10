const express = require("express")
const app = express()
const db= require("./database/db")
const bcrypt = require("bcrypt")
const { where } = require("sequelize")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/",async (req,res)=>{
    const data= await db.todos.findAll() // select everything from the table
    res.render("todo/gettodo", {todos : data})
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

app.get("/login", (req,res)=>{
    res.render("authentication/login")
})

app.post("/login",async (req,res)=>{
    const {email,password}= req.body
    // login logic ---> check if email exits or not
   const users = await db.infos.findAll({
     where : {
        email : email
    }
   })// select * from users where email = entered email.

   if(users.length == 0){
    res.send("User not registered")
   }else{
    //now check password 
    const ispasswordMatched = bcrypt.compareSync(password, users[0].password)
    if(ispasswordMatched){
        res.render("todo/addtodo")
    }else{
        res.send("Invalid Credentials")
    }
   }
       
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
    res.send("registered successfully")

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
