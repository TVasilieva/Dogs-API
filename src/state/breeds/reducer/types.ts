import { GetDogsResponse } from "../../../api/types";

export interface DogsReducer {
  dogs: GetDogsResponse[];
  dogsScrolled: GetDogsResponse[];
  page: number;
  dogsIsLoading: boolean;
  dogsError: string | null;
}
