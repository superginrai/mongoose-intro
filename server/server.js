const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

app.get('/books', (req, res) => {
    res.send(books);
});

const books = [
    {
        title: "The Prince of Tides",
        author: "Pat Conroy",
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
    },
    {
        title: "Dune",
        author: "Frank Herbert",
    },
    {
        title: "High Fidelity",
        authoer: "Nick Hornby",
    },
    {
        title: "Snow Crash",
        author: "Neal Stephenson",
    },
    {
        title: "On Her Majesty's Secret Service",
        author: "Ian Fleming",
    }
];

app.listen(PORT, function () {
    console.log('server up and running on: ', PORT);
});
