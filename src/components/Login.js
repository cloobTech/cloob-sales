/** @format */

import style from "../pages/signin.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../form/Input";
import { useProductContext } from "../global/hooks";
import { ACTION } from "../global/reducer";

const Login = () => {
  const { dispatch } = useProductContext();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
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
            <h3 className={style.form__title}>LOGIN</h3>
            <Input placeholder="Email" name={"email"} type="email" />
            <Input placeholder="Password" name={"password"} type="password" />
            <div className={style.form__btn}>
              <button type="submit">Login</button>
            </div>
            <div className={style.create__acc}>
              Don't have an account?{" "}
              <span onClick={() => dispatch({ type: ACTION.SET_SIGNUP })}>
                Create one.
              </span>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
