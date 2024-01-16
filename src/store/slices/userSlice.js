import { createSlice } from "@reduxjs/toolkit";

const init = {
    user: {},
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState: init,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        clearData: (state) => {
            return init;
        },
    },
});

export const { clearData, setUser } = userSlice.actions;

export default userSlice.reducer;
