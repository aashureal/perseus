const app = require("./src/app");
const { Server } = require("socket.io");
const httpServer = require("http").createServer(app);

const io = new Server(httpServer, {});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Perseus Server" });
});

io.on("connection", (socket) => {
  console.log(`User ${socket.id} is connected`);

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} is disconnected`);
  });



  
});

httpServer.listen(3000, () => {
  console.log("Server is running.");
});
