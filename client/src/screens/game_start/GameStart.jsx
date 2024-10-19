import React from "react";
import style from "./style.module.scss";
import manImg from "../../assets/images/upload-man-1.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GameStart = () => {
  const { t } = useTranslation();

  return (
    <section className={style.game_start}>
      <div className="container">
        <div className={`wrapper ${style.game_start__wrapper}`}>
          <div className={style.game_start__image}>
            <img src={manImg} alt="man" />
          </div>

          <div className={style.game_start__message}>
            <p>{t("gameStartText")}</p>
          </div>

          <div className={style.game_start__buttons}>
            <Link to="/upload-image">{t("gameStartButton1")}</Link>
            <Link to="/">{t("gameStartButton2")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameStart;
