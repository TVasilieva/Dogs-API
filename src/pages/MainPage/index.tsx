import { FC, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Table from "../../components/Table";
import Layout from "../../layout/Gradient";
import { useAppDispatch, useAppSelector } from "../../state";
import { addDogsRequest, getDogsRequest } from "../../state/breeds/actions";
import {
  getDogs,
  getDogsIsLoading,
  getScrolledDogs,
} from "../../state/breeds/selectors";

const limit = 10;

const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  const scrolledDogs = useAppSelector(getScrolledDogs);
  const dogsIsLoading = useAppSelector(getDogsIsLoading);

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!dogsIsLoading)
      dispatch(
        getDogsRequest({
          limit,
          page: 0,
        })
      );
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, [page]);

  const scrollHandler = (e: any): void => {
    if (
      e.target.documentElement.scrollHeight -
        (window.innerHeight + e.target.documentElement.scrollTop) ===
      0
    ) {
      dispatch(
        addDogsRequest({
          limit,
          page,
        })
      );
      setPage((prev) => prev + 1);
    }
  };

  const header: string[] = ["ID", "Name", "Breed", "Photo"];

  return (
    <Layout>
      {dogsIsLoading && <Loader />}
      <Table
        header={header}
        body={scrolledDogs}
        dogsIsLoading={dogsIsLoading}
      />
    </Layout>
  );
};

export default MainPage;
