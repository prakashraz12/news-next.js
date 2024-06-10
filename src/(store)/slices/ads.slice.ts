"use client";
import { createSlice } from "@reduxjs/toolkit";

let adsSlice;
if (typeof window !== "undefined") {
    adsSlice = JSON?.parse(sessionStorage.getItem("ads") || "null") || null;
}
const initialState = {
 adsSlice
};
// Define the slice
const adSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {
   setAdsSlice:(state, action)=>{
    state.adsSlice = action.payload;
    sessionStorage.setItem("ads", JSON.stringify(action.payload))
   }
  },
});

export const { setAdsSlice} = adSlice.actions;

export default adSlice.reducer;
