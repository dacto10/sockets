import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils";
import { RootState } from "../store";

const initialState: IUser = {
    id: "",
    username: "",
    isActive: false
}

export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            const { id, username, isActive } = action.payload;
            state.id = id;
            state.username = username;
            state.isActive = isActive;
        },
    }
});

export const { setUser } = sessionSlice.actions;

export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;