const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! This is my first AWS project. I am learning. Now, I have changed the message :)) - Review stage has been added!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
