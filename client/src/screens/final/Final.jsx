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
              <Link
                to="#"
                onClick={() => {
                  navigator.clipboard.writeText("GAME1000");
                  alert("Success!");
                }}
              >
                GAME1000 <img src={arrowImage} alt="arrow" />
              </Link>

              <p>TAKE A CHANCE TO WIN REAL MONEY </p>

              <Link
                to="#"
                onClick={() => {
                  navigator.clipboard.writeText("TRADINGGAME");
                  alert("Success!");
                }}
              >
                TRADINGGAME <img src={arrowImage} alt="arrow" />
              </Link>

              <p>Enter the promo code and get 100% of the deposit</p>
            </div>

            <img src={manImg} alt="man" />

            <Link to="https://binomo.com/auth?a=bfbfde47c861&ac=trading_game&utm_source=trading_game&utm_medium=trading_game&utm_campaign=trading_game#SignUp ">
              Go to Binomo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Final;
