import React, { useEffect } from "react";
import mainImg from "../../assets/images/tv.png";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Gift = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (window.ym) {
      window.ym(100071464, "reachGoal", "TV");
    }
  }, []);

  return (
    <section className={style.gift}>
      <div className="container">
        <div className={`wrapper ${style.gift__wrapper}`}>
          <div className={style.gift__img}>
            <img src={mainImg} alt="main" />
          </div>

          <div className={style.gift__characteristicks}>
            <div className={style.gift__top}>
              <p>Product Code: 2002220</p>
              <p>4.9</p>
            </div>

            <h4>Samsung 56gn12 TV</h4>
            <h2>2 000 000 Rp</h2>

            <Link to="">{t("giftReviews")}</Link>
          </div>

          <ul className={style.gift__characteristicks__bottom}>
            <li>
              <p>{t("giftPickUp")}</p>
              <p>15 min</p>
            </li>

            <li>
              <p>{t("giftDelivery")}</p>
              <p>{t("giftFrom")}</p>
            </li>
          </ul>

          <Link to="/mom">{t("giftButton")}</Link>
        </div>
      </div>
    </section>
  );
};

export default Gift;
