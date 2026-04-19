const ToDoModel = require("../models/ToDoModel")

module.exports.getToDo = async(req, res) => {
    const toDo = await ToDoModel.find()
    res.json(toDo)
}

module.exports.createToDo = async(req, res) => {
    const { title, description } = req.body
    const newToDo = new ToDoModel({ title, description })
    await newToDo.save()
    res.json(newToDo)
    
    
}
