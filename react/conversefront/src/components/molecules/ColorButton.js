import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: block;
  width: 23px;
  height: 23px;
  padding: 0;
  border-radius: 50%;
  background-size: 20px 20px;
  background-position: 50%;
  overflow: hidden;
  -webkit-transition: -webkit-transform 213ms ease-in-out;
  transition: -webkit-transform 213ms ease-in-out;
  transition: transform 213ms ease-in-out;
  transition: transform 213ms ease-in-out, -webkit-transform 213ms ease-in-out;
  font-size: 0;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const ColorButton = ({ color }) => {
  return <Button style={{ background: color }} />;
};

export default ColorButton;
