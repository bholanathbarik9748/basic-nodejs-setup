const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const authRoute = require("./router/Auth/Auth");

app.use(express.json())
app.use(morgan('dev'));

// import Routes
app.use(authRoute);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => { console.log(`Server is running at http://localhost:${port}/`); });

