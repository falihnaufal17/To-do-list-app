const app = require('express')
const Route = app.Router()
const todoListControllers = require('../controllers/todolist')

Route
    .get('/', todoListControllers.index)
    .get('/todo', todoListControllers.getAllName)
    .get('/todo/:nama_peserta', todoListControllers.getTodoByName)
    .post('/todo', todoListControllers.addTodo)

module.exports = Route