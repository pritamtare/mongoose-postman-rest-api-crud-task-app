const express = require('express')
const User = require('../models/user')
const router = new express.Router();



// USERS
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)        
    }catch(e){ 
        res.status(400).send(e)
    }     
})

router.get('/users', async (req, res)=>{
    
    try{
       const users = await User.find({})
       res.send(users)
    }catch(e){
        res.status(500).send()
    }
})


router.get('/users/:id', async (req, res)=>{
    const _id = req.params.id;
try{
    const user = await User.findById(_id)
    if(!user){
        res.status(404).send()    
    }
    res.send(user)
}catch(e){
    res.status(500).send()  
    }
})


router.patch('/users/:id', async (req, res)=>{

    const updates =  Object.keys(req.body)
    const allowUpdates = ['name', 'email', 'password', 'age' ]
    const isValidOperation = updates.every((update)=>{   
        return allowUpdates.includes(update)
})

if(!isValidOperation){
    return res.status(400).send("Error: Invalid Updates!")
}

    try{
        const _id = req.params.id;
        // const user = await User.findByIdAndUpdate(_id,{ password:'Applehead', name:"Anupama"})  //OR//
        const user = await User.findByIdAndUpdate(_id , req.body , {new: true, runValidators: true})
        if(!user){
          return  res.status(500).send()
        }
        res.send(user)
    }catch(e){
        res.status(400).send()
    }
})


router.delete('/users/:id', async (req, res)=>{
    const id = req.params.id;

    try{
        const user = await User.findByIdAndDelete(id)
        if(!user){
        return res.status(400).send()
        }
       res.send(user)
    }catch(e){
        res.status.send(400)
    }
})



module.exports = router