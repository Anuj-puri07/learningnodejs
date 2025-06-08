const makeInfoTable = (sequelize, Datatypes) =>{
    const info = sequelize.define("infos",{
        firstname : {
            type : Datatypes.STRING
        },
        lastname : {
            type : Datatypes.STRING
        },
        email : {
            type : Datatypes.STRING
        }, 
        password : {
            type : Datatypes.STRING
        }
    })
    return info
}

module.exports = makeInfoTable