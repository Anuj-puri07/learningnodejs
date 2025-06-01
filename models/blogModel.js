// const sequelize = require("sequelize")

const makeBlogTable = (sequelize, Datatypes)=>{
const Blog =sequelize.define("blog",{
    title: {
        type : Datatypes.STRING
    },
    description: {
        type: Datatypes.STRING
    },
    subtitle:{
        type: Datatypes.STRING
    } 
})
return Blog
}


module.exports = makeBlogTable




//define is used to make table and we have to give two arguments to create a table. and when we give name to table it creates in plural form. for eg if we give name as data then in database it is created as datas.