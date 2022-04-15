import { FC } from "react";
import Loader from "../Loader";

import "./style.scss";
import ComponentProps from "./types";

const Table: FC<ComponentProps> = ({ header, body, dogsIsLoading }) => {
  const headers = header.map((el) => {
    return (
      <th className="table__header-cell" key={el}>
        {el}
      </th>
    );
  });

  const dogs = body.map((el) => {
    return (
      <tr className="table__body-row" key={el.id}>
        <td className="table__body-cell">{el.id}</td>
        <td className="table__body-cell">{el.name}</td>
        <td className="table__body-cell">{el.bred_for}</td>
        <td className="table__body-cell_img">
          <img alt={el.name} src={el.image.url} style={{ width: "150px" }} />
        </td>
      </tr>
    );
  });

  return (
    <table className="table">
      <caption className="table__caption">Dogs</caption>
      <thead className="table__header">
        <tr className="table__header-row">{headers}</tr>
      </thead>
      {dogsIsLoading ? (
        <Loader />
      ) : (
        <tbody className="table__body">{dogs}</tbody>
      )}
    </table>
  );
};

export default Table;
