import { MainCabinet } from "./../components/MainCabinet/MainCabinet";
import { LoginPage } from "./../components/LoginPage/LoginPage";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", exact: true, component: LoginPage, routes: [] },
    {
      path: "/cabinet",
      exact: false,
      component: MainCabinet,
      routes: [],
    },
  ],
};
