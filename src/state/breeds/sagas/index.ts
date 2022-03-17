import { takeLatest, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { ActionPayload } from "../..";
import { DogsActions, getDogsResponse, getDogsResponseError } from "../actions";
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

export const breedsSagas = [takeLatest(DogsActions.GET_DOGS_REQUEST, setDogs)];
