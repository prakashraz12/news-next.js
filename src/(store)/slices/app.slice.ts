"use client";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"
let appSettings = null;

if (typeof window !== "undefined") {
    appSettings = JSON?.parse(localStorage.getItem("settings") || "null") || null;
}

let token = null;

let userDetails = null;
if (typeof window !== "undefined") {
    token = JSON.parse(Cookies.get("access_token") || "null") || null
}
if (typeof window !== "undefined") {
    userDetails = JSON.parse(Cookies.get("userDetails") || "null") || null
}
const initialState = {
    appSettings,
    token,
    userDetails

};

// Define the slice
const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addSettings: (state, action) => {
            state.appSettings = action.payload;
            localStorage.setItem("settings", JSON.stringify(action.payload));
        },
        setToken: (state, action) => {
            state.token = action.payload;
            Cookies.set("access_token", JSON.stringify(action.payload))
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
            Cookies.set("userDetails", JSON.stringify(action.payload))
        }
    },
});

export const { addSettings, setToken, setUserDetails } = appSlice.actions;

export default appSlice.reducer;
