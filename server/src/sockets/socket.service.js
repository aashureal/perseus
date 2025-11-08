const { Server } = require("socket.io");
const generateAIResponse = require("../services/ai.service");

const initSocketService = (httpServer) => {
  const io = new Server(httpServer, {});

  io.on("connection", (socket) => {
    console.log(`User ${socket.id} is connected`);

    socket.on("disconnect", () => {
      console.log(`User ${socket.id} is disconnected`);
    });

    socket.on("message", async (data) => {
      //   console.log(data);
      try {
        const response = await generateAIResponse(data);
        socket.emit("message", response);
      } catch (err) {
        console.error(`AI response error for socket ${socket.id}:`, err);
        socket.emit("message", { error: "Failed to generate AI response" });
      }
    });
  });
};

module.exports = initSocketService;
