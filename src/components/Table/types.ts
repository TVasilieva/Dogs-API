import { GetDogsResponse } from "../../api/types";

export default interface ComponentProps {
  header: string[];
  body: GetDogsResponse[];
  dogsIsLoading: boolean;
}
