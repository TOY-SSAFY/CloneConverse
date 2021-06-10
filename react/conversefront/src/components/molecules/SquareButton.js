import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border : 1px solid black;
  background-color: black;
  color : white;
  font-weight : bold;
  max-width : 400px;
  min-width : 180px;
  padding : 15px 20px;
  cursor : pointer;
  transition : 0.3s;

  :hover {
    opacity : 0.6;
    transition : 0.3s;
  }
`

const SquareButton = ({
  text
}) => {
  return (
    <>
      <Button>{text}</Button>
    </>
  );
};

export default SquareButton;
