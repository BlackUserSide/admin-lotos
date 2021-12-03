import React, { FormEvent, useContext, useEffect, useState } from "react";
import "./login.sass";
import crypto from "crypto";
import { dataUser } from "../data";
import { useHistory } from "react-router-dom";
import { MainContext } from "../MainContext/MainContext";
interface IDataLogin {
  login: string;
  password: string;
}
export const LoginPage: React.FC = () => {
  const history = useHistory();
  const [dataLogin, setDataLogin] = useState<IDataLogin>({
    login: "",
    password: "",
  });
  const { changeAuth } = useContext(MainContext);
  const [err, setErr] = useState<string>("");
  const data = dataUser;
  useEffect(() => {
    let password = "123qwedsa";
    const sha1 = crypto.createHash("sha1").update(password).digest("hex");
    console.log(sha1);
  }, []);

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    setDataLogin((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const passwordSha = crypto
      .createHash("sha1")
      .update(dataLogin.password)
      .digest("hex");
    if (dataLogin.login === data.login) {
      if (passwordSha === data.password) {
        if (changeAuth) {
          changeAuth();
          history.push("/cabinet");
        }
      } else {
        setErr("Неправильный логин или пароль");
      }
    } else {
      setErr("Неправильный логин или пароль");
    }
  };

  return (
    <div className="login-page-wrapper">
      <form className="main-form-wrapper" onSubmit={submitHandler}>
        <div className="top-line-wrapper">
          <h1>Вход в акканут</h1>
          {err !== "" ? <span>{err}</span> : ""}
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="login"
            placeholder="Логин"
            onChange={changeHandler}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={changeHandler}
            required
          />
        </div>
        <button className="btn-wrapper-main">
          <span>Логин</span>
        </button>
      </form>
    </div>
  );
};
