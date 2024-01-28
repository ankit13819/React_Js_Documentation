import React, { useContext } from "react";
import ComC from "./ComC";
import { GetNumber } from "./ContextApi";
const ComB = () => {
  const getData = useContext(GetNumber);
  return (
    <>
      <ComC />
      <h1>Our New Number is {getData}</h1>
    </>
  );
};

export default ComB;
