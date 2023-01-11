import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    post: {},
  },
  reducers: {
    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },
    getPostById: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { getAllPosts, getPostById } = postsSlice.actions;
export default postsSlice.reducer;
