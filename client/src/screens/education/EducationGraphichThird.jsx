import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import person from "../../assets/images/after-chat-4.png";
import person2 from "../../assets/images/after-chat-6.png";
import { useTranslation } from "react-i18next";
import graphick from "../../assets/graphicks/third-graphick.json";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import bank from "../../assets/icons/bank.png";

const EducationGraphickThird = () => {
  const { t } = useTranslation();
  const [showNot, setShowNot] = useState(false);

  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const changeText = setTimeout(() => {
      setText(t("educationGraphickThird"));
    }, 4500);

    const showButton = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => {
      clearTimeout(changeText);
      clearTimeout(showButton);
    };
  }, []);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const fadeTransition = {
    duration: 0.5,
  };

  const notificationVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const transition = {
    type: "tween",
    duration: 1,
  };

  return (
    <section className={style.education}>
      <div className="container">
        <div className={`wrapper ${style.education__wrapper}`}>
          {showNot ? (
            <motion.div
              className={style.season_pass__notification}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeVariants}
              transition={fadeTransition}
            >
              <motion.div
                className={style.season_pass__bank}
                initial="hidden"
                animate="visible"
                variants={notificationVariants}
                transition={transition}
              >
                <img src={bank} alt="bank" />

                <div className={style.season_pass__notification__text}>
                  <div>
                    <h3>Bank</h3>
                    <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
                  </div>

                  <p>{t("bankNot")} 11241₹</p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <>
              <div
                className={`${style.education__person} ${style.education__person_2} ${style.education__person_graphick}`}
              >
                <img src={text ? person : person2} alt="person" />

                <div>
                  <h3>{t("education1Name")}</h3>
                  <p>{text ? text : t("education7Text")}</p>
                </div>
              </div>
            </>
          )}

          <div className={style.educatio7__balance}>
            <div className={style.educatio7__balance__demo}>
              <p>{t("education7Demo")}</p>
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

          <div
            style={{ height: 60, width: "100%" }}
            className={style.educatio__graphick__buttons__wrapper}
          >
            {showButton && !showNot && (
              <motion.div
                className={style.educatio_graphick__buttons}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <button onClick={() => setShowNot(true)}>+150 ₹</button>
              </motion.div>
            )}

            {showNot && (
              <motion.div
                className={style.educatio_graphick__buttons}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/group-chat">{t("educationGraphickButton")}</Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationGraphickThird;
