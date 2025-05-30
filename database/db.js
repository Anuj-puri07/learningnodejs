// here the database connection code is written

//step 1 import sequelize
const {Sequelize} = require("sequelize")
// const Sequelize = require("sequelize").Sequelize

require("dotenv").config() //after this syntax we can access the data of env file here

const sequelize = new Sequelize({
    database : process.env.database_name,
    username : process.env.database_username,
    password: process.env.database_password,
    port : process.env.database_port,
    host : process.env.database_host,
    dialect : "mysql"
})

//this above code is used to connect sequilize with the database
sequelize.authenticate()
.then(()=>{
    console.log("Conneccted Successfully");
})

.catch((err) =>{
    console.log("Error connecting database", err);
})

module.exports = sequelize