import React from "react";
import style from "./style.module.scss";
import manImg from "../../assets/images/after_chat.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/banner/Banner";

const Starter = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className={style.starter}>
      <div className="container">
        <div className={`wrapper ${style.starter__wrapper}`}>
          <Banner />

          <h1>STOCKITY TRADING GAME</h1>
          <p>Complete our interactive storytelling and get a chance to</p>

          <img src={manImg} alt="manImg" />

          <div className={style.starter__buttons}>
            <button
              onClick={() => {
                changeLanguage("en");
                navigate("/main");

                if (window.ym) {
                  window.ym(98661745, "reachGoal", "eng");
                }
              }}
            >
              English
            </button>
            <button
              onClick={() => {
                changeLanguage("hi");
                navigate("/main");

                if (window.ym) {
                  window.ym(98661745, "reachGoal", "hindi");
                }
              }}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Starter;
