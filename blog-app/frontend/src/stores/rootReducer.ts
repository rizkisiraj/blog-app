import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categories.reducer";
import { postsReducer } from "./posts/postReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    categories: categoriesReducer
})