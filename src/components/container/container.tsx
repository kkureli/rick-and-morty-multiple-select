import React, { ReactNode } from "react";
import "./container.css";

type Props = {
  children: ReactNode;
};

const Container = (props: Props) => {
  const { children } = props;
  return <div className="wrapper-container">{children}</div>;
};

export default Container;
