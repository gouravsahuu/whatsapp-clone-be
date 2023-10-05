const express = require("express");
const http = require("http");
const {Server} = require("socket.io");

const app = express();

const httpServer = http.createServer(app);

const io = new Server(httpServer);

app.get("/",(req, res) => {
    res.send({"message":"Welcome to Chat Application"});
})

httpServer.listen(4500,() => {
    console.log("Server is running at port 4500");
})