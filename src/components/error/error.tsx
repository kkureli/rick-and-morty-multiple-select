import React from "react";

type Props = {
  errorMessage?: string | null;
};

const Error = (props: Props): JSX.Element => {
  const { errorMessage } = props;
  return <div>{errorMessage}</div>;
};

export default Error;
