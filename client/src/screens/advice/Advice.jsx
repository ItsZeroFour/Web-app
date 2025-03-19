import React from "react";
import style from "./style.module.scss";
import Banner from "../../components/banner/Banner";
import { useNavigate } from "react-router-dom";
import afterChatPerson3 from "../../assets/images/main_person/2.png";
import { useTranslation } from "react-i18next";

const Advice = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className={style.advice}>
      <div className="container">
        <div className={`wrapper ${style.advice__wrapper}`}>
          <Banner />

          <div
            className={`${style.after_chat__person} ${style.after_chat__person__third}`}
          >
            <div className={style.after_chat__messages}>
              <div className={style.after_chat__message}>
                <p>{t("adviceText1")}</p>
              </div>
            </div>

            <img src={afterChatPerson3} alt="after chat 3" />

            <button onClick={() => navigate("/advice-sec")}>
              {t("adviceButton1")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advice;
