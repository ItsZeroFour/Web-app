import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import arrowImage from "../../assets/icons/arrow.svg";
import manImg from "../../assets/images/final_man.png";
import { useTranslation } from "react-i18next";

const Final = () => {
  const { t } = useTranslation();

  const handleLeadTracking = () => {
    if (window.fbq !== undefined) {
      window.fbq("track", "CompleteRegistration");
    }

    if (window.ym) {
      window.ym(98661745, "reachGoal", "binomial_start");
    }
  };

  return (
    <section className={style.final}>
      <div className="container">
        <div className={`wrapper ${style.final__wrapper}`}>
          <div className={style.final__content}>
            <h1>{t("finalTitle")}</h1>

            <img src={manImg} alt="man" />

            <Link
              onClick={() => handleLeadTracking()}
              to="https://binomo.com/auth?a=bfbfde47c861&ac=trading_game&utm_source=trading_game&utm_medium=trading_game&utm_campaign=trading_game#SignUp "
            >
              {t("finalButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Final;
