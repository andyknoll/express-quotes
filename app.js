const express = require('express');
const app = express();
const port = 3000;

const quotes = require('./quotes.js');

app.get('/', (req, res) => {
    console.log('app.GET /');
    res.send('app.GET /');
})

app.get('/quote/random', (req, res) => {
    console.log('app.GET /quote/random');
    const max = quotes.getQuotesLength();
    const rnd = Math.floor(Math.random() * max);
    console.log('random index: ' + rnd);
    res.send(quotes.getQuote(rnd));
})

app.get('/quote/:id', (req, res) => {
    console.log('app.GET /quote');
    console.log(req.params.id);
    res.send(quotes.getQuote(req.params.id));
})

app.get('/quotes', (req, res) => {
    console.log('app.GET /quotes');
    res.send(quotes.getQuotes());
})

app.get('/quotesCount', (req, res) => {
    console.log('app.GET /quotesCount');
    res.send(quotes.getQuotesCount());
})

app.listen(port, () => {
    console.log(``);
    console.log(`Example app listening on port ${port}`);
    console.log(``);
})

