import { createAction } from "../../utils/reducers/reducer";
import { POST_TYPES } from "./postType";

export const setPosts = (posts:[]) =>
  createAction(POST_TYPES.SET_POSTS, posts);