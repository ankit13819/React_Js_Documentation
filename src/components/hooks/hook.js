//A hooks is a special function that lets you "hook" into "React features"

import { useState } from "react";

function Hook() {
  const [titleChange, setTitleChange] = useState("Ankit Gupta");

  const handleTitleChange = () => {
    let val = titleChange;
    if (val === "Ankit Gupta") {
      setTitleChange("Hey What's up");
    } else {
      setTitleChange("Ankit Gupta");
    }
  };
  return (
    <div>
      <h1>{titleChange}</h1>
      <button onClick={handleTitleChange}>Click</button>
    </div>
  );
}
export default Hook;

//React Hooks to rule follow->
