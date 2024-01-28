import React from "react";

const UseStateWithHook = () => {
  const [myObject, setMyObject] = React.useState({
    name: "Ankit",
    age: 23,
    rollNo: 55,
  });

  const changeClick = () => {
    //spread operator-it update the value
    setMyObject({ ...myObject, name: "Anshu" });
  };
  return (
    <div>
      <h1>
        Name: {myObject.name}, Age:{myObject.age}, rollNo: {myObject.rollNo}
      </h1>
      <button onClick={changeClick}>Click</button>
    </div>
  );
};

export default UseStateWithHook;

//Challenge Number 02
