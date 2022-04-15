import axios, { AxiosResponse } from "axios";
import { GetDogsRequest, GetDogsResponse } from "./types";

class DogsAPI {
  static getCategories = async (
    data: GetDogsRequest
  ): Promise<AxiosResponse<GetDogsResponse[]>> => {
    return axios({
      url: `https://api.thedogapi.com/v1/breeds?limit=${data.limit}&page=${data.page}`,
      method: "get",
      headers: {
        "x-api-key": "a0e2ffb3-c7b0-4245-b425-7352a6a09503",
      },
    });
  };
}

export default DogsAPI;
