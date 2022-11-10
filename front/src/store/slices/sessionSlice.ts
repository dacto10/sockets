import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils";
import { RootState } from "../store";

const initialState: User = {
    id: "",
    username: ""
}

export const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state = { ...state, ...action.payload };
        },
    }
});

export const { setUser } = sessionSlice.actions;

export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;