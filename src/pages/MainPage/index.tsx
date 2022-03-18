import { FC, useEffect, useState } from "react";
import Blur from "../../components/Blur";
import Table from "../../components/Table";
import Layout from "../../layout/Gradient";
import { useAppDispatch, useAppSelector } from "../../state";
import { addDogsRequest, getDogsRequest } from "../../state/breeds/actions";
import {
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
        0 &&
      page <= Math.ceil(200 / limit)
    ) {
      setPage(page + 1);
      dispatch(
        addDogsRequest({
          limit,
          page,
        })
      );
    }
  };

  const header: string[] = ["ID", "Name", "Breed", "Photo"];

  return (
    <Blur>
      <Layout>
        <Table
          header={header}
          body={scrolledDogs}
          dogsIsLoading={dogsIsLoading}
        />
      </Layout>
    </Blur>
  );
};

export default MainPage;
