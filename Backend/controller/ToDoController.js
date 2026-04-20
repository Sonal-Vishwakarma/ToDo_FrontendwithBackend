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
module.exports.createToDo = module.exports.createToDo
module.exports.updateToDo = async(req, res) => {
    const { id } = req.params
    const { title, description } = req.body
    const updatedToDo = await ToDoModel.findByIdAndUpdate(id, { title, description }, { new: true })
    res.json(updatedToDo)
}