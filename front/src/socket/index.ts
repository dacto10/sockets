import { Socket } from "socket.io-client";
import { addMessageAction, addPrivateAction, addPrivateMessageAction } from "../store/actions/messages";

const configureSocket = (socket: Socket) => {
    socket.on("joined", addPrivateAction);
    socket.on("private", addPrivateMessageAction);
    socket.on("message", addMessageAction);
}