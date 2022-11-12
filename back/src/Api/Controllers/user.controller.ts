import { Socket, Server } from "socket.io"
import { connectedUsers } from "../../Data";
import { IUser as IUser, IMessage } from "../../Utils/types";

const initConnection = (server: Server) => (socket: Socket) => {
    socket.on("start", startHandler(server))
    socket.on("message", messageHandler(server, socket))
    socket.on("disconnect", leftHandler(server, socket))
};

const messageHandler = (server: Server, socket: Socket) => (body: IMessage) => {    
    if (body.to) {
        server.to(body.to.id).emit("private", { content: body.content, from: connectedUsers.find(el => el.id === socket.id) })
    } else {
        socket.broadcast.emit("message", { content: body.content, from: connectedUsers.find(el => el.id === socket.id) })
    }
}

const startHandler = (server: Server) => (body: IUser) => {
    connectedUsers.push(body);
    server.emit("joined", connectedUsers);
}

const leftHandler = (server: Server, socket: Socket) => () => {
    const index = connectedUsers.findIndex(user => user.id === socket.id);
    connectedUsers.splice(index, 1);    
    server.emit("left", { id: socket.id });
}

const UserController = {
    initConnection
};

export {
    UserController
};