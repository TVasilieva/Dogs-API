import { FC } from "react";
import "./style.scss";

import { CircularProgress } from "@mui/material";

const Loader: FC = () => {
  return (
    <div className="progress">
      <CircularProgress />
    </div>
  );
};

export default Loader;
