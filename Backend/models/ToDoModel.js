const mongoose = require("mongooes")

const toDoSchema = new mongoose.Schema({
    toDo:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model("ToDo", toDoSchema)