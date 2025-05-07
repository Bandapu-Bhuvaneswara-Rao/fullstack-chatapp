import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// ✅ Increase payload size limit (in case socket requests need large data)
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"], // ✅ Ensure correct frontend URL
  },
});


export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

//✅ Maintain socket-user mapping
const userSocketMap = {}; // {userId: socketId}



io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
