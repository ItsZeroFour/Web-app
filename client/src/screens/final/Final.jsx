import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import arrowImage from "../../assets/icons/arrow.svg";
import manImg from "../../assets/images/final_man.png";
import { useTranslation } from "react-i18next";

const Final = () => {
  const { t } = useTranslation();

  return (
    <section className={style.final}>
      <div className="container">
        <div className={`wrapper ${style.final__wrapper}`}>
          <div className={style.final__content}>
            <h1>{t("finalTitle")}</h1>
            <p>
              {t("finalTextPart1")}{" "}
              <Link
                to="https://blog.binomo.com/tradinggame2024/"
                target="_blank"
              >
                {t("finalTextLink")}
              </Link>{" "}
              {t("finalTextPart2")}
            </p>

            <div className={style.final__promo}>
              <Link
                to="#"
                onClick={() => {
                  navigator.clipboard.writeText("GAME1000");
                  alert(t("copyNotification"));
                }}
              >
                GAME1000 <img src={arrowImage} alt="arrow" />
              </Link>

              <p>{t("finalText2")}</p>

              <Link
                to="#"
                onClick={() => {
                  navigator.clipboard.writeText("TRADINGGAME");
                  alert(t("copyNotification"));
                }}
              >
                TRADINGGAME <img src={arrowImage} alt="arrow" />
              </Link>

              <p>{t("finalText3")}</p>
            </div>

            <img src={manImg} alt="man" />

            <Link to="https://binomo.com/auth?a=bfbfde47c861&ac=trading_game&utm_source=trading_game&utm_medium=trading_game&utm_campaign=trading_game#SignUp ">
              {t("finalButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Final;
