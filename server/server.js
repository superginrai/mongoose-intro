const express = require('express');
const mongoose = require('mongoose');

const Book = require('./models/book.schema');

const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));


//connecting to Mongo section
const databaseUrl = 'mongodb://localhost:27017/library'
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('Mongoose connection error', error)
});

//connecting to Mongo section


//get rout for books
app.get('/books', (req, res) => {
    //database read/find
    Book.find({})
        .then((dataFromDatabase) => {
            //success!
            console.log('data from database', dataFromDatabase);
            res.send(dataFromDatabase);
        })
        .catch((error) => {
            //error!
            console.log('error with Book.find', error);
            res.sendStatus(500);
        });
});

// const books = [
//     {
//         title: "The Prince of Tides",
//         author: "Pat Conroy",
//     },
//     {
//         title: "Pride and Prejudice",
//         author: "Jane Austen",
//     },
//     {
//         title: "Dune",
//         author: "Frank Herbert",
//     },
//     {
//         title: "High Fidelity",
//         authoer: "Nick Hornby",
//     },
//     {
//         title: "Snow Crash",
//         author: "Neal Stephenson",
//     },
//     {
//         title: "On Her Majesty's Secret Service",
//         author: "Ian Fleming",
//     }
// ];

app.listen(PORT, function () {
    console.log('server up and running on: ', PORT);
});
