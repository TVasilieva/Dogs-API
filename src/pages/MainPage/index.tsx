import { FC } from "react";
import Table from "../../components/Table";
import Layout from "../../layout/Gradient";

const MainPage: FC = () => {
  const header: string[] = ["ID", "Name", "Breed", "Photo"];
  return (
    <Layout>
      <Table header={header} />
    </Layout>
  );
};

export default MainPage;
