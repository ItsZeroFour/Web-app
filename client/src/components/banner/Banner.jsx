import React from "react";
import style from "./style.module.scss";
import bannerLogo from "../../assets/icons/banner_logo.svg";
import gift from "../../assets/icons/gift.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.banner__logo}>
        <img src={bannerLogo} alt="logo" />
      </div>

      <Link to="/">
        <p>GET</p>
        <img src={gift} alt="gift" />
      </Link>
    </div>
  );
};

export default Banner;
