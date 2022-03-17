import { FC, useEffect } from "react";
import Loader from "../../components/Loader";
import Table from "../../components/Table";
import Layout from "../../layout/Gradient";
import { useAppDispatch, useAppSelector } from "../../state";
import { getDogsRequest } from "../../state/breeds/actions";
import { getDogs, getDogsIsLoading } from "../../state/breeds/selectors";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  const dogs = useAppSelector(getDogs);
  const dogsIsLoading = useAppSelector(getDogsIsLoading);

  useEffect(() => {
    if (!dogsIsLoading)
      dispatch(
        getDogsRequest({
          limit: 10,
          page: 0,
        })
      );
  }, []);

  const header: string[] = ["ID", "Name", "Breed", "Photo"];

  return (
    <Layout>
      <Table header={header} body={dogs} dogsIsLoading={dogsIsLoading} />
    </Layout>
  );
};

export default MainPage;
