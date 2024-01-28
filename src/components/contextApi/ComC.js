import React from "react";
import { FirstName, LastName, MiddleName } from "./ContextApi";

const ComC = () => {
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
    </>
  );
};

export default ComC;
