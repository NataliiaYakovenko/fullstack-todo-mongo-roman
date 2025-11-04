const http = require("http");
const app = require("./app");
const { Server } = require("socket.io");

const cors ={
  origin:'*'
}

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, cors);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
