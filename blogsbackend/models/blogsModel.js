const  mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    article:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('blogsdb', blogSchema)