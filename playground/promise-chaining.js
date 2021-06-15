require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('60c63c6763791426d43e8261', { age: 26 }).then((user)=>{
//     console.log(user)
//     return  User.countDocuments({ age: 26})
// }).then((count)=>{
//     console.log("count:" + count)
// }).catch((e)=>{
//     console.log(e)
// })


const updateAgeAndCount = async (id, age, name )=>{
    const user = await User.findByIdAndUpdate(id, { age , name})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60c6293db12d564350dd4e46', 29, 'Mike').then((count)=>{
    console.log(count)
}).then((err)=>{
    console.log(err)
})