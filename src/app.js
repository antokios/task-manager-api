const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

// Parse JSON to Obj
app.use(express.json())

// Routes
app.use(userRouter)
app.use(taskRouter)

module.exports = app