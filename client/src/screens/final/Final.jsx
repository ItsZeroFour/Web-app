import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import arrowImage from "../../assets/icons/arrow.svg";
import manImg from "../../assets/images/final_man.png";

const Final = () => {
  return (
    <section className={style.final}>
      <div className="container">
        <div className={`wrapper ${style.final__wrapper}`}>
          <div className={style.final__content}>
            <h1>
              Now it’s a time for a real trading! Start your way with our
              promocodes:
            </h1>

            <div className={style.final__promo}>
              <Link to="/">
                GAME1000 <img src={arrowImage} alt="arrow" />
              </Link>

              <p>TAKE A CHANCE TO WIN REAL MONEY </p>

              <Link to="/">
                TRADINGGAME <img src={arrowImage} alt="arrow" />
              </Link>

              <p>Enter the promo code and get 100% of the deposit</p>
            </div>

            <img src={manImg} alt="man" />

            <Link to="/">Go to Binomo</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Final;
