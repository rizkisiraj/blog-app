import { combineReducers } from "redux";
import { postsReducer } from "./posts/postReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
})