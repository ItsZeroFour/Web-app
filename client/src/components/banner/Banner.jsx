import React from "react";
import style from "./style.module.scss";
import gifs from "../../assets/icons/gifs.png";
import coins from "../../assets/icons/coins.png";

const Banner = () => {
  return (
    <div className={style.banner}>
      <img src={gifs} alt="gifs" />
      <div className={style.banner__text}>
        <h2>Win $200</h2>
        <p>Warning: trading involves financial risks. Rules</p>
      </div>
      <img src={coins} alt="coins" />
    </div>
  );
};

export default Banner;
