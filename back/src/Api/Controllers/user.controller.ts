import { Socket, Server } from "socket.io"
import { connectedUsers } from "../../Data";
import { User, Message } from "../../Utils/types";

const initConnection = (server: Server) => (socket: Socket) => {
    socket.on("start", startHandler(socket))
    socket.on("message", messageHandler(server, socket))
    socket.on("disconnect", leftHandler(socket))
};

const messageHandler = (server: Server, socket: Socket) => (body: Message) => {
    if (body.to) {
        server.to(body.to).emit("private", { content: body.content, from: socket.id })
    } else {
        socket.broadcast.emit("message", { content: body.content, from: socket.id})
    }
}

const startHandler = (socket: Socket) => (body: User) => {
    connectedUsers.push(body);
    socket.broadcast.emit("joined", connectedUsers);
}

const leftHandler = (socket: Socket) => () => {
    const index = connectedUsers.findIndex(user => user.id !== socket.id);
    connectedUsers.splice(index, 1);
    socket.broadcast.emit("left", { id: socket.id });
}

const UserController = {
    initConnection
};

export {
    UserController
};