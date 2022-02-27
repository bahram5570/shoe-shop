import { createSlice } from "@reduxjs/toolkit";

const initialState = {user: ''};

const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        userLogin: (state, action) => {}
    }
});

export const {userLogin} = loginSlice.actions;
export default loginSlice.reducer;