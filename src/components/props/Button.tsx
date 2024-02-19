import React from "react";

type ButtonProps = {
  children: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

export const Button = ({children, handleClick}: ButtonProps) => {
  return (
    <button onClick={(event) => handleClick(event, 1)}>{ children }</button>
  )
}