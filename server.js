const express = require('express');
const app = express();

const port = 5000;

const test = [
    {msg: 'hello'}, {msg: 'there'}, {msg: 'friend'}
];

app.listen(port, () => console.log(`server running @ http://localhost:${port}`));