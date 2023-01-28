import React from "react";

const Button = (props: any) => {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
