import { User } from "../../utils/types";
import { addPrivate, addPrivateMessage, addMessage, removePrivate } from "../slices/messageSlice";
import { store } from "../store"

export const addPrivateAction = (body: User) => {
    const dispatch = store.dispatch;
    const { message: { privates } } = store.getState();
    const users = privates.map(el => el.with);
    if (!(users.find(el => el.id === body.id))) dispatch(addPrivate(body));
}

export const addPrivateMessageAction = (body: { content: string, from: User }) => {
    const dispatch = store.dispatch;
    const { message: { privates } } = store.getState();
    privates.map(el => {
        if (el.with.id === body.from.id) {
            el.messages.push({ from: body.from, message: body.content })
        }
        return el;
    });

    dispatch(addPrivateMessage(privates));
}

export const addMessageAction = (body: { content: string, from: User }) => {
    const dispatch = store.dispatch;

    dispatch(addMessage({ from: body.from, message: body.content }));
}

export const removePrivateMessageAction = (body: { id: string }) => {
    const dispatch = store.dispatch;
    const { message: { privates } } = store.getState();
    const users = privates.filter(chat => chat.with.id !== body.id);

    dispatch(removePrivate(users));
}