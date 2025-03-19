import React from "react";
import style from "./style.module.scss";
import bannerLogo from "../../assets/icons/banner_logo.svg";
import gift from "../../assets/icons/gift.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={style.banner}>
      <Link
        to="/conversion"
        onClick={async () => {
          if (window.ym) {
            await window.ym(100071464, "reachGoal", "banner");
          }
        }}
      >
        <div className={style.banner__logo}>
          <img src={bannerLogo} alt="logo" />
        </div>

        <Link to="/">
          <img src={gift} alt="gift" />
        </Link>
      </Link>
    </div>
  );
};

export default Banner;
