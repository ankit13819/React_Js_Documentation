//it provide to access the data from parent component to different levels of child component

//Step for ContextApi
//createContext
//Provider
//Consumer-> isko return data alwayse {} ke andar as a function always milna chaiye

import { React, createContext } from "react";
import ComA from "./ComA";
const FirstName = createContext();
const LastName = createContext();
const MiddleName = createContext();
const GetNumber = createContext();

const ContextApi = () => {
  return (
    <>
      <FirstName.Provider value={"Ankit"}>
        <LastName.Provider value={"Gupta"}>
          <MiddleName.Provider value={"Kumar"}>
            <GetNumber.Provider value={34}>
              <ComA />
            </GetNumber.Provider>
          </MiddleName.Provider>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default ContextApi;
export { FirstName, LastName, MiddleName, GetNumber };
