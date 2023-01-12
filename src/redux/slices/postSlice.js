import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    petPosts: [],
    post: {},
    reactions: [],
    comments:[]
  },
  reducers: {
    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },
    getPostById: (state, action) => {
      state.petPosts = action.payload;
    },
    postPost: (state, action)=>{
      state.post = action.payload;
    },
    reactions: (state, action)=>{
      state.reactions = action.payload
    },
    comments: (state, action)=>{
      state.comments = action.payload
    }
  },
});

export const { getAllPosts, getPostById, postPost, reactions,comments } = postsSlice.actions;
export default postsSlice.reducer;
