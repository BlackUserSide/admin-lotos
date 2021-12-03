import React, { useState } from "react";
import { dataUser } from "../data";
import { MainContext } from "./MainContext";

export const MainContextComponent: React.FC = ({ children }) => {
  const [authWrapper, setAuthWrapper] = useState<boolean>(false);
  const value = {
    auth: authWrapper,
    dataUser: dataUser,
    changeAuth: () => {
      setAuthWrapper(true);
    },
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
