import { createSlice } from "@reduxjs/toolkit";

const initialState = {event: null};

const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        userSignin: (state, action) => {},

        userSignup: (_, action) => {
            if (action.payload === null) {
                return {event: null}
            };

            const storedUser = localStorage.getItem("user_" + action.payload.Username);

            if (storedUser) {
                return {event: 0}
            } else {
                localStorage.setItem("user_" + action.payload.Username, JSON.stringify(action.payload));
                return {event: 1 }
            };
        },

        userSignout: (state, action) => {},
    }
});

export const {userSignin, userSignup, userSignout} = loginSlice.actions;
export default loginSlice.reducer;