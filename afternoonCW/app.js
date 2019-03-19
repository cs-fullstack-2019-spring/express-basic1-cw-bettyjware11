const express = require('express');
const app = express();


app.use(express.static('public'));
// app.use(express.static('media'));

//Exercise 1 made route to say "Betty created a server here"
app.get('/', (req, res) => {
    res.send('Betty created a server here!')
});

//Exercise 2 made route to say "Betty got a post request"
// POST method route

app.post('/post', function (req, res) {
    res.send('Betty got a post request')
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
