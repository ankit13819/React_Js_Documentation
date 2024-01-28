import React, { useContext } from "react";
import { FirstName, LastName, MiddleName, GetNumber } from "./ContextApi";

const ComC = () => {
  const getData = useContext(GetNumber);
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <MiddleName.Consumer>
                    {(mname) => {
                      return (
                        <h1>
                          My Name is {fname} {mname} {lname}
                        </h1>
                      );
                    }}
                  </MiddleName.Consumer>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
      <h1>The Number is {getData}</h1>
    </>
  );
};

export default ComC;
