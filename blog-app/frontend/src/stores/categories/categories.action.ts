import { createAction } from "../../utils/reducers/reducer";
import { CATS_TYPES } from "./categories.types";

export const setCats = (categories:[]) =>
  createAction(CATS_TYPES.SET_CATS, categories);