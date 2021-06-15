const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter =  require('./routers/userRouter')
const taskRouter = require('./routers/taskRouter')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//router
app.use(userRouter)
app.use(taskRouter)



//port setting
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})