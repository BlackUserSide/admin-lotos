import React, { useContext, useEffect } from "react";
import { MainContext } from "../MainContext/MainContext";
import { useHistory } from "react-router-dom";
import "./maincabinet.sass";
export const MainCabinet: React.FC = () => {
  const { auth } = useContext(MainContext);
  const history = useHistory();
  useEffect(() => {
    console.log(auth);
    if (!auth) {
      history.push("/login");
    }
  }, [history, auth]);
  return (
    <div className="main-cabinet-wrapper">
      <div className="main-block-wrapper">
        <div className="item-block-main">
          <h2 className="h2">Товары</h2>
        </div>
        <div className="item-block-main">
          <h2 className="h2">Заказы</h2>
        </div>
        <div className="item-block-main">
          <h2 className="h2">Склады</h2>
        </div>
      </div>
    </div>
  );
};
