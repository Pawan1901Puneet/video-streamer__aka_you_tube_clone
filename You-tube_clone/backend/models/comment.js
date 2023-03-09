const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({

    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    videoId : {
        type : Schema.Types.ObjectId,
        ref : 'Video',
        required : true
    },
    desc : {
        type : String,
        required : true
    }

},{timestamps : true});


module.exports = mongoose.model('Comment',commentSchema);