"use client";
import { News } from "@/types/newsTypes";
import { createSlice } from "@reduxjs/toolkit";

const highlightedNews: News[] = [];
const rows: News[] = [];
const half_half: News[] = [];
const flat: News[] = [];
const menuNews: any = null;
const initialState = {
  highlightedNews,
  menuNews,
  rows,
  flat,
  half_half,
};
// Define the slice
const cacheSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {
    cachedHighlightedNews: (state, action) => {
      state.highlightedNews = action.payload;
    },
    setMenuNews: (state, action) => {
      state.menuNews = action.payload;
    },
    setRowsNews: (state, action) => {
      state.rows = action.payload;
    },
    setHalfAndHalf: (state, action) => {
      state.half_half = action.payload;
    },
    setFlat: (state, action) => {
      state.flat = action.payload;
    },
  },
});

export const { cachedHighlightedNews, setMenuNews, setFlat, setHalfAndHalf, setRowsNews } = cacheSlice.actions;

export default cacheSlice.reducer;
