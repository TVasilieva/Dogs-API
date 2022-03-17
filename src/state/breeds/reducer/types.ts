import { GetDogsResponse } from "../../../api/types";

export interface DogsReducer {
  dogs: GetDogsResponse[];
  dogsIsLoading: boolean;
  dogsError: string | null;
}
