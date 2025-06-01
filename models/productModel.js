const makeBlogTable = (sequelize, Datatypes)=>{
const product =sequelize.define("Product",{
    name: {
        type : Datatypes.STRING
    },
    price: {
        type : Datatypes.FLOAT
    },
    quantity :{
        type: Datatypes.INTEGER
    },
    description: {
        type: Datatypes.STRING
    }
})
return product
}

module.exports = makeBlogTable