const express = require("express");
const app = express.Router();
const controller = require("./controller");

app.get("/categories", async (req, res) => {
    res.send(await controller.listAll());
})


app.get("/categories/:id", async (req, res) => {
    res.send(await controller.listOne(req.params.id));
})

app.post("/categories/:id", async (req, res) => {
    res.send(await controller.edit(req.params.id, req.body));
})

// rota .... falta a funcao create(criar)
app.post("/catagories", async (req, res) => {
    res.send(await controller.create(req.body))
});


module.exports = app;
