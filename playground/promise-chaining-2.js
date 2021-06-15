require('../src/db/mongoose')
const Task = require('../src/models/task');

// Task.findByIdAndDelete('60c63bbe17d0f149b4085160').then((task)=>{
//     console.log(task)
//     return Task.countDocuments( {completed: true})
// }).then((count)=>{
//     console.log('total completed: ' + count)
// }).catch((e)=>{
//     console.log(e)
// })


const findTaskAndDelete = async (id)=>{
    const user = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ name:"clean the home" })
    return count
}

findTaskAndDelete('60c63dc763791426d43e8264', ).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log('---------ERROR---------' + e)
})