const mongoose = require('mongoose');
const path = require('path');
const coverImageBasePath = 'uploads/bookCovers'

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    publishDate:{
        type:Date,
        required:true
    },
    pageCount:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    },
    coverImageName:{
        type:String,
        required:true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Author'
    }

})

bookSchema.virtual('coverImagePath').get(function name() {
    if(this.coverImageName != null){
        return path.join('/', coverImageBasePath, this.coverImageName);
    }
})

const Book = mongoose.model('Book', bookSchema);

exports.Book = Book;
exports.coverImageBasePath = coverImageBasePath;