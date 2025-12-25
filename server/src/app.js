// app.js
const express = require('express');
const app = express();

// Middleware เพื่อ parse JSON
app.use(express.json());

// Test routes (optional)
app.get('/status', (req, res) => {
    res.send('Hello Node.js Server!');
});

app.get('/hello/:name', (req, res) => {
    console.log('hello - ' + req.params.name);
    res.send('say hello with ' + req.params.name);
});

// เรียกใช้ routes.js (User + Drink)
require('./routes')(app);

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
