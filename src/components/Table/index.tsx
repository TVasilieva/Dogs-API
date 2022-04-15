import { FC } from "react";

import "./style.scss";
import ComponentProps from "./types";

const Table: FC<ComponentProps> = ({ header }) => {
  const headers = header.map((el) => {
    return (
      <th className="table__header-cell" key={el}>
        {el}
      </th>
    );
  });

  return (
    <table className="table">
      <caption className="table__caption">Dogs</caption>
      <thead className="table__header">
        <tr className="table__header-row">{headers}</tr>
      </thead>
      <tbody className="table__body">
        <tr className="table__body-row">
          <td className="table__body-cell"></td>
          <td className="table__body-cell"></td>
          <td className="table__body-cell"></td>
          <td className="table__body-cell"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
