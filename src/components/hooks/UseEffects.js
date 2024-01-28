import React from "react";

const UseEffects = () => {
  return (
    <div>
      <h1>UseEffects</h1>
    </div>
  );
};

export default UseEffects;

//Definition-> Hooks are new Addition in React 16.8
//The Effect Hook lets you perform side effects in function component

//What are side effects?
//Side effects are basically anything that affects something outside of the scope of the current function that's being executed. In our dashboard this includes->

//API requests to our backend service.
//Calls to our authentication service
//Error tracking calls to Sentry
