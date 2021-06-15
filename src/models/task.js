const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model('Task', {
    name: {
        type: String,
        required:true,
        trim:true
    },
    completed: {
        type: Boolean,
        required:true,
        trim:true
    }
})

module.exports = Task