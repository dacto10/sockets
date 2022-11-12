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
            state = { ...state, privates: [...state.privates, ...action.payload.map(el => ({ with: el, messages: [] }))] }
        },
        removePrivate: (state, action: PayloadAction<IPrivateConversation[]>) => {
            state = { ...state,  }
        },
        addPrivateMessage: (state, action: PayloadAction<IPrivateConversation[]>) => {
            state = { ...state, privates: [...action.payload] }
        },
        addMessage: (state, action: PayloadAction<IMessage>) => {
            state = { ...state, general: [...state.general, action.payload] }
        }
    }
})

export const { addPrivate, removePrivate, addPrivateMessage, addMessage } = messageSlice.actions;

export const selectMessage = (state: RootState) => state.message;

export default messageSlice.reducer;