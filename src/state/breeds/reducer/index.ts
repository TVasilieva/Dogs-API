import { ActionsType } from "../../../utils/actionCreator";
import { DogsActions } from "../actions";
import { DogsReducer } from "./types";

const initialState: DogsReducer = {
  dogs: [],
  dogsScrolled: [],
  page: 0,
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
        dogsScrolled: action.payload,
      };
    case DogsActions.GET_DOGS_RESPONSE_ERROR:
      return {
        ...state,
        dogsIsLoading: false,
        dogsError: action.payload,
      };
    case DogsActions.ADD_DOGS_REQUEST:
      return {
        ...state,
        dogsIsLoading: true,
      };
    case DogsActions.ADD_DOGS_RESPONSE:
      return {
        ...state,
        dogsIsLoading: false,
        dogsScrolled: [...state.dogsScrolled, ...action.payload],
      };
    case DogsActions.ADD_DOGS_RESPONSE_ERROR:
      return {
        ...state,
        dogsIsLoading: false,
        dogsError: action.payload,
      };
    default:
      return state;
  }
};
