import { GetDogsResponse } from "../../../api/types";

export interface DogsReducer {
  dogs: GetDogsResponse[];
  dogsScrolled: GetDogsResponse[];
  dogsIsLoading: boolean;
  dogsError: string | null;
}
