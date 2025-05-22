import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { toast } from "react-toastify";

const initialState = {
    isAuthenticated: !!localStorage.getItem('fittrack_login'),
    user: JSON.parse(localStorage.getItem('fittrack_login')) || null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signUpUser: (state, action) => {
            const newUser = action.payload;
            const existingUsers = JSON.parse(localStorage.getItem("fittrack_users")) || [];
            existingUsers.push(newUser);
            localStorage.setItem("fittrack_users", JSON.stringify(existingUsers));
            toast.success("SignUp Successful!");
        },
        loginUser: (state,action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('fittrack_login',JSON.stringify({
                email : action.payload.email,
                password : action.payload.password,
            }));
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;  
            localStorage.removeItem('fittrack_login');
            toast.success("Logout Successful!");
        },
        updateProfile: (state, action) => {
            state.user = {...state.user, ...action.payload};
            localStorage.setItem('fittrack_user',JSON.stringify(state.user));
        },
    },
});

export const { signUpUser, loginUser , logoutUser, updateProfile } = userSlice.actions;
export default userSlice.reducer;