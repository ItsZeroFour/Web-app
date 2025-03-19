import React, { useState, useRef, useEffect } from "react";
import style from "./style.module.scss";
import afterChatPerson5 from "../../assets/images/main_person/1-1.png";
import graphickTop from "../../assets/graphicks/from_top_to_bottom.json";
import graphickBottom from "../../assets/graphicks/from_bottom_to_top.json";
import Lottie from "lottie-react";
import arrowTop from "../../assets/icons/arrow_top.svg";
import arrowBottom from "../../assets/icons/arrow_bottom.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GraphickFirst = () => {
  const [animationData, setAnimationData] = useState(graphickTop);
  const [isClick, setIsClick] = useState(false);
  const lottieRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleButtonClick = (direction) => {
    const newAnimationData =
      direction === "down" ? graphickTop : graphickBottom;

    if (lottieRef.current) {
      lottieRef.current.stop();
    }

    setAnimationData(newAnimationData);

    setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.play();
      }
    }, 0);

    setIsClick(true);
  };

  useEffect(() => {
    if (isClick) {
      const navigateToAdvicePage = setTimeout(() => {
        navigate("/advice");
      }, 6000);

      return () => {
        clearTimeout(navigateToAdvicePage);
      };
    }
  }, [isClick]);

  return (
    <section className={style.graphick_first}>
      <div className="container">
        <div className={`wrapper ${style.graphick__wrapper}`}>
          <div className={style.graphick_first__top}>
            <img src={afterChatPerson5} alt="person" />
            <div className={style.graphick_first__top__text}>
              <h4>Andi Pratama</h4>
              <p>{t("graphickFirstText")}</p>
            </div>
          </div>

          <div className={style.graphick_first__balance}>
            <p>Your demo balance</p>
            <div className={style.graphick_first__balance__main}>
              <h2>50000RP</h2>
              <div>
                <p>EUR/USD</p>
              </div>
            </div>
          </div>

          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={false}
            autoplay={false}
            style={{ width: "100%", height: 300 }}
          />

          {!isClick && (
            <div className={style.graphick_first__buttons}>
              <button
                onClick={() => handleButtonClick("down")}
                disabled={isClick}
              >
                {t("graphickFirstButton1")}{" "}
                <img src={arrowBottom} alt="bottom" />
              </button>
              <button
                onClick={() => handleButtonClick("top")}
                disabled={isClick}
              >
                {t("graphickFirstButton2")} <img src={arrowTop} alt="top" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GraphickFirst;
