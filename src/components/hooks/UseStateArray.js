import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      name: "Ankit",
      age: 23,
    },
    {
      id: 1,
      name: "Anshu",
      age: 26,
    },
  ];

  const [myArray, setMyArray] = useState(bioData);
  const clearChange = () => {
    setMyArray([]);
  };

  const removeEle = (id) => {
    const myNewArr = myArray.filter((item) => {
      return item.id !== id;
    });
    setMyArray(myNewArr);
  };
  return (
    <div>
      {myArray.map((item) => {
        return (
          <>
            <h1>
              Name:{item.name} && Age:{item.age}
            </h1>
            <button style={{ color: "red" }} onClick={() => removeEle(item.id)}>
              remove
            </button>
          </>
        );
      })}
      <button onClick={clearChange}>Clear</button>
    </div>
  );
};
export default UseStateArray;

//Short Circuit Evalaution

//multiple render karwa sakte hai
//with the help of || and && Operator

//Basic Form in React
