require("dotenv").config();
const app = require("./src/app");
const { Server } = require("socket.io");
const initSocketService = require("./src/sockets/socket.service");
const connectDB = require("./src/db/db");
const httpServer = require("http").createServer(app);

initSocketService(httpServer);

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Perseus Server" });
});

httpServer.listen(3000, () => {
  console.log("Server is running.");
});
