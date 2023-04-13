const express = require('express');
const categoryRoutes = require("./resources/category/routes");

const app = express();

// quando chegar vem como hipertexto e esse comando muda p tipo json
app.use(express.json());

app.use(categoryRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
