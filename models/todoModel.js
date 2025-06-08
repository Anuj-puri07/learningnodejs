const makeTodoTable = (sequelize, Datatypes)=>{
    const todo =sequelize.define("todos",{
    task: {
        type : Datatypes.STRING
    },
    description: {
        type : Datatypes.TEXT
    },
    date :{
        type: Datatypes.STRING
    },
    status: {
        type: Datatypes.ENUM("completed", "pending"), 
        defaultValue: "pending"
    }
})
return todo
}

module.exports = makeTodoTable