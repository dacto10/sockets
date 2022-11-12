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
            state = { ...state, ...action.payload };
        },
    }
});

export const { setUser } = sessionSlice.actions;

export const selectSession = (state: RootState) => state.session;

export default sessionSlice.reducer;