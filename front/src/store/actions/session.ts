import { socket } from "../..";
import { IUser } from "../../utils";
import { setUser } from "../slices/sessionSlice";
import { store } from "../store";

export const setUserAction = (user: IUser) => {
    const dispatch = store.dispatch;
    socket.emit("start", user);    

    dispatch(setUser(user));
}

export const removeUserAction = () => {
    const dispatch = store.dispatch;
    socket.emit("disconnect");

    dispatch(setUser({ id: "", username: "", isActive: false }));
}