const math = require('./math');
console.log(math.add(5,5));
console.log(math.minus(5,5));

const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
    res.send('សួស្តីពី Express!');
});

app.get('/about', (req, res) => {
    res.send('hello from About page!');
});

// ONE server only
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});