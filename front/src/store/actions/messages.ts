import { IPrivateConversation, IUser } from "../../utils/types";
import { addPrivate, addPrivateMessage, addMessage, removePrivate } from "../slices/messageSlice";
import { store } from "../store"

export const addPrivateAction = (incomingUsers: IUser[]) => {
    const dispatch = store.dispatch;
    const { session, message: { privates } } = store.getState();
    const newUsers = incomingUsers.filter((user: IUser) => user.id !== session.id).filter((user: IUser) => !(privates.find((conversation: IPrivateConversation) => conversation.with.id === user.id)));
    
    dispatch(addPrivate(newUsers));
}

export const addPrivateMessageAction = (body: { content: string, from: IUser }) => {
    const dispatch = store.dispatch;
    const { message: { privates } } = store.getState();
    privates.map(chat => {
        if (chat.with.id === body.from.id) {
            chat.messages.push({ from: body.from, message: body.content })
        }
        return chat;
    });

    dispatch(addPrivateMessage(privates));
}

export const addMessageAction = (body: { content: string, from: IUser }) => {
    const dispatch = store.dispatch;

    dispatch(addMessage({ from: body.from, message: body.content }));
}

export const removePrivateMessageAction = (body: { id: string }) => {
    const dispatch = store.dispatch;
    const { message: { privates } } = store.getState();
    const users = privates.map(chat => {
        if (chat.with.id !== body.id) {
            chat = { ...chat, with: { ...chat.with, isActive: false } }
            return chat;
        }
        return chat;
    });

    dispatch(removePrivate(users));
}