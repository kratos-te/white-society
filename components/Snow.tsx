// components/Snow.tsx
import React, { FC } from "react";
import Snowfall from "react-snowfall";

const Snow: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10">
      <Snowfall snowflakeCount={1000} color="#ffffff" />
    </div>
  );
};

export default Snow;
