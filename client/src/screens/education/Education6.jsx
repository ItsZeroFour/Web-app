import React from "react";
import style from "./style.module.scss";
import person from "../../assets/images/after-chat-6.png";
import { useTranslation } from "react-i18next";
import graphick from "../../assets/images/graphick.svg";
import { Link } from "react-router-dom";

const Education6 = () => {
  const { t } = useTranslation();

  return (
    <section className={style.education}>
      <div className="container">
        <div className={`wrapper ${style.education__wrapper}`}>
          <div
            className={`${style.education__person} ${style.education__person_2} ${style.education__person_7}`}
          >
            <img src={person} alt="person" />

            <div>
              <h3>{t("education1Name")}</h3>
              <p>You have to predict whether the graph will go up or down</p>
            </div>
          </div>

          <div className={style.educatio7__balance}>
            <div className={style.educatio7__balance__demo}>
              <p>Your demo balance</p>
              <h1>10000₹</h1>
            </div>

            <div className={style.educatio7__balance__currency}>
              <p>EUR/USD</p>
            </div>
          </div>

          <img
            className={style.educatio7__graphick}
            src={graphick}
            alt="graphich"
          />

          <div className={style.educatio7__buttons}>
            <Link to="/education-graphick-third">Down</Link>
            <Link to="/education-graphick-third">Up</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education6;
