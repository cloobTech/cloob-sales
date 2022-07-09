/** @format */

import React from "react";
import { ErrorMessage, Field } from "formik";
import style from "./form.module.css";
import Error from "../components/Error";

const Input = ({ name, type, ...rest }) => {
  return (
    <div className={style.form__control}>
      <Field name={name} type={type} {...rest} />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

export default Input;
