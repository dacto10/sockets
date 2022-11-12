import { Server } from "socket.io";
import { UserController } from "../Controllers/user.controller"

export const configureServer = (server: Server) => {
    server.on("connection", UserController.initConnection(server))
}