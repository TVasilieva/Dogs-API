export interface GetDogsRequest {
  limit: number;
  page: number;
  attach_breed?: number;
}

export interface GetDogsResponse {
  id: number;
  bred_for: string;
  name: string;
  temperament: string;
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
}
