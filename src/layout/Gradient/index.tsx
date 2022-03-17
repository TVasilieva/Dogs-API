import React, { FC } from "react";
import "./style.css";
import ComponentProps from "./types";

const Layout: FC<ComponentProps> = (props) => {
  return (
    <div className="bg-gradient">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;
