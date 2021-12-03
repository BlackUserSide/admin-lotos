import { createContext } from "react";
import { IDataUser } from "../data";

interface IMainContext {
  auth: boolean;
  dataUser: IDataUser;
  changeAuth: () => void;
}
export const MainContext = createContext<Partial<IMainContext>>({});
