//UseReduce-> It is similiar to useState but when we use when you have manage for multiple state or big project.

import { useReducer, useState } from "react";

//Reducers->Reducers are pure functions that take in a state and action and return a new state.

//A reducer should always follow the following rules:
//Given a set of inputs, it should always return the same output. No surprises, side effects, API calls, mutations.
let initialState = 0;
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

const UseReducer = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
};

export default UseReducer;
