import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import person from "../../assets/images/after-chat-4.png";
import { useTranslation } from "react-i18next";
import graphick from "../../assets/graphicks/from_top_to_bottom.json";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const EducationGraphickUp = () => {
  const { t } = useTranslation();

  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const changeText = setTimeout(() => {
      setText(t("educationGraphickText"));
    }, 4500);

    const showButton = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => {
      clearTimeout(changeText);
      clearTimeout(showButton);
    };
  }, []);

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
              <p>{text ? text : t("education7Text")}</p>
            </div>
          </div>

          <div className={style.educatio7__balance}>
            <div className={style.educatio7__balance__demo}>
              <p>Your demo balance</p>
              <h1>9900₹</h1>
            </div>

            <div className={style.educatio7__balance__currency}>
              <p>USD/EUR</p>
            </div>
          </div>

          <Lottie
            animationData={graphick}
            loop={false}
            autoplay={true}
            style={{ width: "90%", height: 350 }}
          />

          <div style={{ height: 60, width: "100%" }}>
            {showButton && (
              <motion.div
                className={style.educatio_graphick__buttons}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/education-1">Ok</Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationGraphickUp;
