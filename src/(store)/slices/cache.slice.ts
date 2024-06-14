"use client";
import { News } from "@/types/newsTypes";
import { createSlice } from "@reduxjs/toolkit";

const highlightedNews: News[] = [];
const rows: News[] = [];
const half_half: News[] = [];
const flat: News[] = [];
const coverStoryNews: News[] = [];
const trendingNews: News[] = [];
const provinceNews: News[] = [];
const galleryNews: News[] = [];
const isFlaged: boolean = false;
const initialState = {
  highlightedNews,
  rows,
  flat,
  half_half,
  coverStoryNews,
  isFlaged,
  trendingNews,
  provinceNews,
  galleryNews,
};
// Define the slice
const cacheSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {
    cachedHighlightedNews: (state, action) => {
      state.highlightedNews = action.payload;
    },
    setRowsNews: (state, action) => {
      state.rows = { ...state.rows, ...action.payload };
    },
    setHalfAndHalf: (state, action) => {
      state.half_half = { ...state.half_half, ...action.payload };
    },
    setFlat: (state, action) => {
      state.flat = { ...state.flat, ...action.payload };
    },
    setCoverStoryNews: (state, action) => {
      state.coverStoryNews = action.payload;
    },
    setIsFlagged: (state, action) => {
      state.isFlaged = action.payload;
    },
    setTrendingNews: (state, action) => {
      state.trendingNews = action.payload;
    },
    setProvinceNews: (state, action) => {
      state.provinceNews = action.payload;
    },
    setGalleryNews: (state, action) => {
      state.galleryNews = action.payload;
    },
  },
});

export const {
  cachedHighlightedNews,
  setFlat,
  setHalfAndHalf,
  setRowsNews,
  setCoverStoryNews,
  setIsFlagged,
  setTrendingNews,
  setProvinceNews,
  setGalleryNews,
} = cacheSlice.actions;

export default cacheSlice.reducer;
