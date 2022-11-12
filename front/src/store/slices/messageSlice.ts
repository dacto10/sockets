import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage, Messages, IPrivateConversation, IUser } from "../../utils";
import { RootState } from "../store";

const initialState: Messages = {
    general: [],
    privates: []
}

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addPrivate: (state, action: PayloadAction<IUser[]>) => {
            state.privates = [...state.privates, ...action.payload.map(el => ({ with: el, messages: [] }))] 
        },
        removePrivate: (state, action: PayloadAction<IPrivateConversation[]>) => {
            state.privates = action.payload;
        },
        addPrivateMessage: (state, action: PayloadAction<IMessage>) => {
            state.privates = state.privates.map(chat => {
                if (chat.with.id === action.payload.from.id) {
                    chat.messages = [...chat.messages, action.payload]
                }
                return chat;
            });
        },
        addOwnPrivateMessage: (state, action: PayloadAction<{ msg: IMessage, with: string }>) => {
            state.privates = state.privates.map(chat => {
                if (chat.with.id === action.payload.with) {
                    chat.messages = [...chat.messages, action.payload.msg]
                }
                return chat;
            });
        },
        addMessage: (state, action: PayloadAction<IMessage>) => {
            state.general = [...state.general, action.payload];
        }
    }
})

export const { addPrivate, removePrivate, addPrivateMessage, addMessage, addOwnPrivateMessage } = messageSlice.actions;

export const selectMessage = (state: RootState) => state.message;

export default messageSlice.reducer;