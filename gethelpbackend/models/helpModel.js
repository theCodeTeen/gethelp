const mongoose=require('mongoose');

const helpSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A name is required!']
    },
    contact:{
        type:String,
        minLength:10,
        maxLength:10,
        unique:[true,'Contact already registered'],
        required:[true,'A contact is required!']
    },
    state:{
        type:String,
        required:[true,'A state is required!']
    },
    district:{
        type:String,
        required:[true,'A district is required!']
    },
    description:{
        type:String,
        required:[true,'A description is required'],
        minLength:12
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Help',helpSchema);