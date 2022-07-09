/** @format */

import React from "react";
import style from "./signin.module.css";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { useProductContext } from "../global/hooks";

const SignIn = () => {
  const { productState } = useProductContext();
  const { login } = productState;

  return <div className={style.signin}>{login ? <Login /> : <Signup />}</div>;
};

export default SignIn;
