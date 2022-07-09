/** @format */

import React from "react";
import Input from "../form/Input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import style from "../pages/signin.module.css";
import { useProductContext } from "../global/hooks";
import { ACTION } from "../global/reducer";

const Signup = () => {
  const { dispatch } = useProductContext();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().trim().required("Required"),
    password: Yup.string().min(6).required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => {
        return (
          <Form className={style.form__container}>
            <h3 className={style.form__title}>SIGN UP</h3>
            <Input placeholder="Full Name" name={"name"} type="email" />
            <Input placeholder="Email" name={"email"} type="email" />
            <Input placeholder="Password" name={"password"} type="password" />
            <div className={style.form__btn}>
              <button type="submit">Register</button>
            </div>
            <div className={style.create__acc}>
              Already have an account?{" "}
              <span onClick={() => dispatch({ type: ACTION.SET_LOGIN })}>
                Login.
              </span>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Signup;
