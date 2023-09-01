const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.post('/submit', (req, res) => {
    const formData = req.body; 
    console.log(formData);
});

app.listen(3000);