/** @format */

// import { collection, addDoc } from "firebase/firestore";
import React from "react";
import Input from "../form/Input";
import style from "./info.module.css";
import { Formik, Form } from "formik";
import { BsChevronLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import card1 from "../assets/card/card1.png";
import card2 from "../assets/card/card2.png";
import card3 from "../assets/card/card3.png";

const Info = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "tester@gamil.com",
    phone: "+234 Tester",
    address: "tester address",
    companyAddress: "tester",
    city: "tester city",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    try {
      console.log(values);
      return navigate("../shipping");
    } catch {
      console.log("not successful");
    }
  };

  return (
    <div className={style.container}>
      <h3>Contact Info</h3>
      <div className={style.payment}>
        <div>
          <img src={card2} alt="" srcset="" />
        </div>
        <div>
          <img src={card1} alt="" srcset="" />
        </div>
        <div>
          <img src={card3} alt="" srcset="" />
        </div>
        <strong className={style.payment__title}>Express Checkout</strong>
      </div>

      <div className={style.hr}>
        <hr />
        <div>or continue with credit card</div>
      </div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <h4 className={style.form__title}>Shipping Address</h4>
              <br />

              <Input placeholder="First Name" name={"firstName"} />
              <Input placeholder="Last Name" name={"lastName"} />
              <Input placeholder="Email" name={"email"} type="email" />
              <Input
                placeholder="Company Address (Required for business owners)"
                name={"companyAddress"}
              />
              <Input placeholder="Address" name={"address"} />
              <Input placeholder="city" name={"city"} />
              <Input placeholder="phone (optional)" name={"phone"} />

              <div className={style.btn__container}>
                <Link to={"../cart"}>
                  <div>
                    <span>
                      <BsChevronLeft />
                    </span>
                    Go back to cart
                  </div>
                </Link>
                <div>
                  <button
                    disabled={!formik.isValid || formik.isSubmitting}
                    type="submit"
                  >
                    Go to shipping
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Info;
