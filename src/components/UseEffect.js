import React, { useEffect } from "react";
import { useState } from "react";
function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //The code that we want to run
    console.log("The count is:", count);

    //Optional return function
    return () => console.log("I am being Cleaned Up!");
  }, [count]); //The Dependency array;

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect;
