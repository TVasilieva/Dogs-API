import { RootState } from "../..";
import { GetDogsResponse } from "../../../api/types";

export const getDogs = (state: RootState): GetDogsResponse[] => state.dogs.dogs;
export const getDogsIsLoading = (state: RootState): boolean =>
  state.dogs.dogsIsLoading;
