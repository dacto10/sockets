import { Socket, Server } from "socket.io"
import { UserBody, MessageBody } from "../../Utils/types";

const initConnection = (server: Server) => (socket: Socket) => {
    socket.on("start", startHandler(server, socket))
    socket.on("message", messageHandler(server, socket))
    socket.on("disconnect", leftHandler(server, socket))
};

const messageHandler = (server: Server, socket: Socket) => (body: MessageBody) => {
    if (body.to) {
        server.to(body.to).emit("private", { content: body.content, from: socket.id })
    } else {
        socket.broadcast.emit("message", { content: body.content, from: socket.id})
    }
}

const startHandler = (_: Server, socket: Socket) => (body: UserBody) => {
    socket.broadcast.emit("joined", body)
}

const leftHandler = (_: Server, socket: Socket) => () => {
    socket.broadcast.emit("left", { id: socket.id })
}

const UserController = {
    initConnection,
};

export {
    UserController
};