const express = require('express');
const categoriaRouter = require('./resources/categoria/router')
const app = express();

// usar a rota
app.use(categoriaRouter);

app.listen(8000, () => {
    console.log('Ta on');
});