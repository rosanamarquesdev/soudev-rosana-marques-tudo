const http = require("http"); // ele que vai criar um servidor apartir dele
const host = "localhost";
const port = "8000";

const userController = require("./users");

const server = http.createServer((req, res) => {
    if(req.url == "/users"){
        res.end(userController.listUser())
    } else {
        res.end("Hello World");
    }

    res.end("Hello World") // end.() function nativa que finaliza a resposta
});

server.listen(port, host, () => {
    console.log(`Servidor de pe no link: http://${host}:${port}`);
});
