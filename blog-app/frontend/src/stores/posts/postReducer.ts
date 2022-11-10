import { POST_TYPES } from "./postType";

interface Action {
  type:string,
  payload:[]
}

export const POSTS_INITIAL_STATE = {
  posts: [],
};

export const postsReducer = (
  state = POSTS_INITIAL_STATE,
  action:Action = {type:"", payload:[]}
) => {
  const { type, payload } = action;

  switch (type) {
    case POST_TYPES.SET_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};