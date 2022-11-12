import { CATS_TYPES } from './categories.types'

interface Action {
  type:string,
  payload:[]
}

export const CATS_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATS_INITIAL_STATE,
  action:Action = {type:"", payload:[]}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATS_TYPES.SET_CATS:
      return { ...state, categories: payload };
    default:
      return state;
  }
};