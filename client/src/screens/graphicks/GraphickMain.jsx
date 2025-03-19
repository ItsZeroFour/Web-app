import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import graphick from "../../assets/graphicks/third-graphick.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GraphickMain = () => {
  const [showButton, setShowButton] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (window.ym) {
      window.ym(100071464, "reachGoal", "stonks");
    }

    const showButton = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => {
      clearTimeout(showButton);
    };
  }, []);

  return (
    <section className={style.graphick_main}>
      <div className="container">
        <div className={`wrapper ${style.graphick_main__wrapper}`}>
          <h1>
            {t("graphick2Text")} <br /> 
            {i18n.language !== 'bh' && <span>🗓️</span>}
          </h1>

          <Lottie
            animationData={graphick}
            loop={false}
            autoplay={true}
            style={{ width: "110%", height: 300 }}
          />

          {showButton && <Link to="/gift">{t("graphickMainButton")}</Link>}
        </div>
      </div>
    </section>
  );
};

export default GraphickMain;
