// import rootReducer from "./reducer";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunkMiddleware from "redux-thunk";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     rootReducer,
//     composeEnhancer(applyMiddleware(thunkMiddleware))
// );

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import posts from "../slices/postSlice";
import user from "../slices/userSlice";
import pet from "../slices/petSlice";
import specieRace from "../slices/specieRaceSlice";

export default configureStore({
  reducer: {
    posts: posts,
    user: user,
    pet: pet,
    specieRace: specieRace
  },
});
