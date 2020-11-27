const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = 4000;

app.use(
    session({
        secret: '@codestates',
        resave: false,
        saveUninitialized: true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST','PUT','DELETE'],
        credentials: true
    })
);

app.get('/', (req, res) => {
    res.status(200).send('Connect server!!')
})

app.listen(port, () => {
    console.log(`Success!! Connect in PORT ${port}`);
})

module.exports = app;