"use client";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"
let appSettings = null;

if (typeof window !== "undefined") {
    appSettings = JSON?.parse(sessionStorage.getItem("settings") || "null") || null;
}

let token = null;

let userDetails = null;
if (typeof window !== "undefined") {
    token = JSON.parse(Cookies.get("access_token") || "null") || null
}
if (typeof window !== "undefined") {
    userDetails = JSON.parse(Cookies.get("userDetails") || "null") || null
}
const isAuthOpen = false;
const initialState = {
    appSettings,
    token,
    userDetails,
    isAuthOpen

};

// Define the slice
const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addSettings: (state, action) => {
            state.appSettings = action.payload;
            sessionStorage.setItem("settings", JSON.stringify(action.payload));
        },
        setToken: (state, action) => {
            state.token = action.payload;
            Cookies.set("access_token", JSON.stringify(action.payload), {expires:90})
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
            Cookies.set("userDetails", JSON.stringify(action.payload),  {expires:90})
        },
        setLogOut: (state) => {
            state.userDetails = null;
            state.token = null;
            Cookies.remove("access_token");
            Cookies.remove("userDetails");
        },
        setIsAuthOpen: (state, action) => {
            state.isAuthOpen = action.payload;
        }
    },
});

export const { addSettings, setToken, setUserDetails, setLogOut, setIsAuthOpen} = appSlice.actions;

export default appSlice.reducer;
