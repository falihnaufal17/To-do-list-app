const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 1700

// init routes
const todoListRoutes = require('./src/routes/todolist')

app.listen(port, () => {
    console.log(`Server Started With Port ${port}`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', todoListRoutes)