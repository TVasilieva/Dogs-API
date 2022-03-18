import { takeLatest, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { ActionPayload } from "../..";
import {
  addDogsResponse,
  addDogsResponseError,
  DogsActions,
  getDogsResponse,
  getDogsResponseError,
} from "../actions";
import BreedsAPI from "../../../api/dogs";
import { GetDogsRequest, GetDogsResponse } from "../../../api/types";

function* setDogs(action: ActionPayload<GetDogsRequest>) {
  try {
    const response: AxiosResponse<GetDogsResponse[]> =
      yield BreedsAPI.getCategories(action.payload as GetDogsRequest);

    const dogs = response.data;

    yield put(getDogsResponse(dogs));
  } catch (error) {
    yield put(getDogsResponseError((error as TypeError).message));
  }
}

function* addDogs(action: ActionPayload<GetDogsRequest>) {
  try {
    const response: AxiosResponse<GetDogsResponse[]> =
      yield BreedsAPI.getCategories(action.payload as GetDogsRequest);

    const dogs = response.data;
    yield put(addDogsResponse(dogs));
  } catch (error) {
    yield put(addDogsResponseError((error as TypeError).message));
  }
}

export const dogsSagas = [
  takeLatest(DogsActions.GET_DOGS_REQUEST, setDogs),
  takeLatest(DogsActions.ADD_DOGS_REQUEST, addDogs),
];
