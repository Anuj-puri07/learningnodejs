// here the database connection code is written

//step 1 import sequelize
const {Sequelize,DataTypes} = require("sequelize")
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
    console.log("Connected Successfully");
})

.catch((err) =>{
    console.log("Error connecting database", err);
})


const db = {}
db.blogs = require("./../models/blogModel")(sequelize,DataTypes)
db.products = require("./../models/productModel")(sequelize, DataTypes)

sequelize.sync({alter: true}).then(() =>{
    console.log("Migrated successfully")
})//migration code

module.exports = sequelize