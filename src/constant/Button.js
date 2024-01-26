import React from "react";

const Button = ({className, children}) => {
  return (
    <>
      <button className={`${className} w-3/4 py-3 rounded-full`}>{children}</button>
    </>
  );
};

export default Button;
