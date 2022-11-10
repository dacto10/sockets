import { Socket } from "socket.io-client";
import { addMessageAction, addPrivateAction, addPrivateMessageAction, removePrivateMessageAction } from "../store/actions/messages";

export const configureSocket = (socket: Socket) => {
    socket.on("joined", addPrivateAction);
    socket.on("private", addPrivateMessageAction);
    socket.on("message", addMessageAction);
    socket.on("left", removePrivateMessageAction);
}