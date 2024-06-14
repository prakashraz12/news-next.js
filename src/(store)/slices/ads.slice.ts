"use client";
import { createSlice } from "@reduxjs/toolkit";

// let adsSlice;
// if (typeof window !== "undefined") {
//     adsSlice = JSON?.parse(sessionStorage.getItem("ads") || "null") || null;
// }
const initialState = {
 adsSlice:{} || null
};
// Define the slice
const adSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
   setAdsSlice:(state, action)=>{
    state.adsSlice = { ...state.adsSlice, ...action.payload };
   }
  },
});

export const { setAdsSlice} = adSlice.actions;

export default adSlice.reducer;
