import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/banner_iphone.png";
import bannerSecondaryLogo from "../../assets/images/banner_secondary_logo.svg";

const BannerSecondary = () => {
  return (
    <div className={style.banner}>
      <Link to="/after-chat?index=5" target="_blank" rel="noreferrer">
        <img src={bannerImg} alt="banner iphone" />
        <div className={style.banner__main}>
          <img src={bannerSecondaryLogo} alt="logo" />
          <h2>Win iphone 16 or $500</h2>
          <p>
            Warning: trading involves financial risks. <Link to="/">Rules</Link>
          </p>
        </div>
        <img src={bannerImg} alt="banner iphone" />
      </Link>
    </div>
  );
};

export default BannerSecondary;
