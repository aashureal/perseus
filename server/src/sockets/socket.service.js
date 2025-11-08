const { Server } = require("socket.io");

const initSocketService = (httpServer) => {
  const io = new Server(httpServer, {});

  io.on("connection", (socket) => {
    console.log(`User ${socket.id} is connected`);

    socket.on("disconnect", () => {
      console.log(`User ${socket.id} is disconnected`);
    });

    socket.on("message", (data) => {
      console.log(data);
    });
  });
};

module.exports = initSocketService;
