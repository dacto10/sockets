import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message, Messages, PrivateConversation, User } from "../../utils";
import { RootState } from "../store";

const initialState: Messages = {
    general: [],
    privates: []
}

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addPrivate: (state, action: PayloadAction<User[]>) => {
            state = { ...state, privates: [...state.privates, ...action.payload.map(el => ({ with: el, messages: [] }))] }
        },
        removePrivate: (state, action: PayloadAction<PrivateConversation[]>) => {
            state = { ...state,  }
        },
        addPrivateMessage: (state, action: PayloadAction<PrivateConversation[]>) => {
            state = { ...state, privates: [...action.payload] }
        },
        addMessage: (state, action: PayloadAction<Message>) => {
            state = { ...state, general: [...state.general, action.payload] }
        }
    }
})

export const { addPrivate, removePrivate, addPrivateMessage, addMessage } = messageSlice.actions;

export const selectMessage = (state: RootState) => state.message;

export default messageSlice.reducer;