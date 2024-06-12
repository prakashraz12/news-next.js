"use client";
import { News } from "@/types/newsTypes";
import { createSlice } from "@reduxjs/toolkit";

const highlightedNews: News[] = [];
const rows: News[] = [];
const half_half: News[] = [];
const flat: News[] = [];
const coverStoryNews: News[] = [];
const menuNews: any = null;
const isFlaged: boolean = false;
const initialState = {
  highlightedNews,
  menuNews,
  rows,
  flat,
  half_half,
  coverStoryNews,
  isFlaged
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
    setCoverStoryNews: (state, action) => {
      state.coverStoryNews = action.payload;
    },
    setIsFlagged: (state, action) => {
      state.isFlaged = action.payload;
    }
  },
});

export const { cachedHighlightedNews, setMenuNews, setFlat, setHalfAndHalf, setRowsNews , setCoverStoryNews, setIsFlagged} = cacheSlice.actions;

export default cacheSlice.reducer;
