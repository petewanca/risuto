const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => (res.json('hello')));

app.listen(port, () => console.log(`server running @ http://localhost:${port}`));