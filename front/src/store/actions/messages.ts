import { User } from "../../utils/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addPrivate, selectMessage, addPrivateMessage, addMessage } from "../slices/messageSlice";

export const addPrivateAction = (body: User) => {
    const dispatch = useAppDispatch();
    const { privates } = useAppSelector(selectMessage);
    const users = privates.map(el => el.with);
    if (!(users.find(el => el.id === body.id))) dispatch(addPrivate(body));
}

export const addPrivateMessageAction = (body: { content: string, from: User }) => {
    const dispatch = useAppDispatch();
    const { privates } = useAppSelector(selectMessage);
    privates.map(el => {
        if (el.with.id === body.from.id) {
            el.messages.push({ from: body.from, message: body.content })
        }
        return el;
    });

    dispatch(addPrivateMessage(privates));
}

export const addMessageAction = (body: { content: string, from: User }) => {
    const dispatch = useAppDispatch();

    dispatch(addMessage({ from: body.from, message: body.content }));
}