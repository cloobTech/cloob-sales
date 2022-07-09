/** @format */

import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillTwitterCircle,
  AiFillCopyrightCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__social__media}>
          <div className={style.social__media__link}>
            <a
              target={"_blank"}
              rel="noreferrer boopenner"
              href={"https://wwww.facebook.com/bellolamide94"}
            >
              <AiFillFacebook />
            </a>
          </div>
          <div className={style.social__media__link}>
            <a
              target={"_blank"}
              rel="noreferrer boopenner"
              href={"https://wa.me/2347062482037"}
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
          <div className={style.social__media__link}>
            <a
              target={"_blank"}
              rel="noreferrer boopenner"
              href={"https://www.linkedin.com/in/bello-olamide-91bab61a3"}
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className={style.social__media__link}>
            <a
              target={"_blank"}
              rel="noreferrer boopenner"
              href={"https://www.instagram.com/cloobtech"}
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
        <div className={style.footer__copyright}>
          <div className={style.social__media__link}>
            <AiFillCopyrightCircle />
          </div>
          <p>CloobTech, 2022.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
