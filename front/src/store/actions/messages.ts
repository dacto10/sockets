import { socket } from "../..";
import { IPrivateConversation, IUser } from "../../utils/types";
import { addPrivate, addPrivateMessage, addMessage, removePrivate, addOwnPrivateMessage } from "../slices/messageSlice";
import { store } from "../store"

export const addPrivateAction = (incomingUsers: IUser[]) => {
    const dispatch = store.dispatch;
    const { session, message } = store.getState();
    const usersToNotify = incomingUsers.filter(user => message.privates.find(el => el.with.id === user.id) === undefined).filter(user => user.id !== session.id);
    
    usersToNotify.forEach(user => {
        addMessageAction({ content: user.username + " joined the chat!", from: { id: "", username: "", isActive: false }});
    });

    const newUsers = incomingUsers.filter((user: IUser) => user.id !== session.id).filter((user: IUser) => !(message.privates.find((conversation: IPrivateConversation) => conversation.with.id === user.id)));
    
    dispatch(addPrivate(newUsers));
}

export const addPrivateMessageAction = (body: { content: string, from: IUser }) => {
    const dispatch = store.dispatch;

    dispatch(addPrivateMessage({ message: body.content, from: body.from }));
}

export const addMessageAction = (body: { content: string, from: IUser }) => {
    const dispatch = store.dispatch;

    dispatch(addMessage({ from: body.from, message: body.content }));
}

export const removePrivateMessageAction = (body: { id: string }) => {
    const dispatch = store.dispatch;
    const { message: { privates } } = store.getState();
    const userGone = privates.find(conversation => conversation.with.id === body.id)?.with.username;

    if (userGone) {
        addMessageAction({ content: userGone + " has left the chat", from: { id: "", username: "", isActive: false }});
    }

    const users = privates.map(chat => {
        if (chat.with.id === body.id) {
            chat = { with: { ...chat.with, isActive: false }, messages: [...chat.messages, { message: chat.with.username + " has left the chat", from: { id: "", username: "", isActive: false } }] }
            return chat;
        }
        return chat;
    });

    dispatch(removePrivate(users));
}

export const sendMessageAction = (content: string, to?: IUser) => {
    const { session } = store.getState();
    const dispatch = store.dispatch;
    
    if (to) {
        dispatch(addOwnPrivateMessage({ msg: { message: content, from: session }, with: to.id }));
        socket.emit("message", { content, to });
    } else {
        addMessageAction({ content, from: session })
        socket.emit("message", { content });
    }
}