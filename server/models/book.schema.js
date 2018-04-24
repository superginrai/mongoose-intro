const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true }
});

//hey Mongoose, use the 'book' collection!
//Mongoose sez: Welcome to 'books'!
module.exports = mongoose.model( 'book', bookSchema);