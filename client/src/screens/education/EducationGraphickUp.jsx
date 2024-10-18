import React from "react";
import style from "./style.module.scss";
import person from "../../assets/images/after-chat-4.png";
import { useTranslation } from "react-i18next";
import graphick from "../../assets/graphicks/from_top_to_bottom.json";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const EducationGraphickUp = () => {
  const { t } = useTranslation();

  return (
    <section className={style.education}>
      <div className="container">
        <div className={`wrapper ${style.education__wrapper}`}>
          <div
            className={`${style.education__person} ${style.education__person_2} ${style.education__person_graphick}`}
          >
            <img src={person} alt="person" />

            <div>
              <h3>{t("education1Name")}</h3>
              <p>{t("education7Text")}</p>
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

          <Lottie
            animationData={graphick}
            loop={false}
            autoplay={true}
            style={{ width: "90%", height: 350 }}
          />

          <div className={style.educatio_graphick__buttons}>
            <Link to="#">+150 ₹</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationGraphickUp;
