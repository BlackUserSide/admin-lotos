import React from "react";
import { MainContextComponent } from "./components/MainContext/MainContextComponent";
import { MainRoutes } from "./routes/MainRouter";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";

export const App: React.FC = () => {
  return (
    <div className="main-app">
      <RoutesContext.Provider value={useRoutes}>
        <MainContextComponent>
          <MainRoutes />
        </MainContextComponent>
      </RoutesContext.Provider>
    </div>
  );
};
