import { GetDogsRequest, GetDogsResponse } from "../../../api/types";
import { actionCreator } from "../../../utils/actionCreator";

export enum DogsActions {
  GET_DOGS_REQUEST = "GET_DOGS_REQUEST",
  GET_DOGS_RESPONSE = "GET_DOGS_RESPONSE",
  GET_DOGS_RESPONSE_ERROR = "GET_DOGS_RESPONSE_ERROR",

  ADD_DOGS_REQUEST = "ADD_DOGS_REQUEST",
  ADD_DOGS_RESPONSE = "ADD_DOGS_RESPONSE",
  ADD_DOGS_RESPONSE_ERROR = "ADD_DOGS_RESPONSE_ERROR",
}

export const getDogsRequest = (data: GetDogsRequest) =>
  actionCreator<DogsActions, GetDogsRequest>(
    DogsActions.GET_DOGS_REQUEST,
    data
  );
export const getDogsResponse = (data: GetDogsResponse[]) =>
  actionCreator<DogsActions, GetDogsResponse[]>(
    DogsActions.GET_DOGS_RESPONSE,
    data
  );
export const getDogsResponseError = (error: any) =>
  actionCreator<DogsActions, any>(DogsActions.GET_DOGS_RESPONSE_ERROR, error);

export const addDogsRequest = (data: GetDogsRequest) =>
  actionCreator<DogsActions, GetDogsRequest>(
    DogsActions.ADD_DOGS_REQUEST,
    data
  );
export const addDogsResponse = (data: GetDogsResponse[]) =>
  actionCreator<DogsActions, GetDogsResponse[]>(
    DogsActions.ADD_DOGS_RESPONSE,
    data
  );
export const addDogsResponseError = (error: any) =>
  actionCreator<DogsActions, any>(DogsActions.ADD_DOGS_RESPONSE_ERROR, error);
