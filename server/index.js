const http = require("http");
const app = require("./app");
const { Server } = require("socket.io");

const cors = {
  origin: "*",
};

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, cors);

io.on("connect", (socket) => {
  console.log("CONNECTION");

  //кожні 5 секунд відправляти на клієнт якесь повідомлення
  setInterval(() => {
    io.emit("NEW NOTIFICATION", { notification: `Current time:${Date.now()}` });
  }, 5000);

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
