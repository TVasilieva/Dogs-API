import { ActionsType } from "../../../utils/actionCreator";
import { DogsActions } from "../actions";
import { DogsReducer } from "./types";

const initialState: DogsReducer = {
  dogs: [],
  dogsIsLoading: false,
  dogsError: null,
};

export const dogsReducer = (
  state = initialState,
  action: ActionsType
): DogsReducer => {
  switch (action.type) {
    case DogsActions.GET_DOGS_REQUEST:
      return {
        ...state,
        dogsIsLoading: true,
      };
    case DogsActions.GET_DOGS_RESPONSE:
      return {
        ...state,
        dogsIsLoading: false,
        dogs: action.payload,
      };
    case DogsActions.GET_DOGS_RESPONSE_ERROR:
      return {
        ...state,
        dogsIsLoading: false,
        dogsError: action.payload,
      };
    default:
      return state;
  }
};
