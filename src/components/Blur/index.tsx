import { FC } from "react";
import { ComponentProps } from "./types";
import "./style.scss";
import { useAppSelector } from "../../state";
import { getDogsIsLoading } from "../../state/breeds/selectors";

const Blur: FC<ComponentProps> = ({ children }) => {
  const dogsIsLoading = useAppSelector(getDogsIsLoading);

  if (dogsIsLoading) {
    return <div className="overlay">{children}</div>;
  }
  return children;
};

export default Blur;
