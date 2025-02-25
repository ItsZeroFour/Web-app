import React from "react";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import afterChatPerson5 from "../../assets/images/after-chat-5.png";
import popular1 from "../../assets/images/popular/popular-1.png";
import popular2 from "../../assets/images/popular/popular-2.png";
import popular3 from "../../assets/images/popular/popular-3.png";
import popular4 from "../../assets/images/popular/popular-4.png";
import popular5 from "../../assets/images/popular/popular-5.png";
import popular6 from "../../assets/images/popular/popular-6.png";
import popular7 from "../../assets/images/popular/popular-7.png";
import popular8 from "../../assets/images/popular/popular-8.png";
import popular9 from "../../assets/images/popular/popular-9.png";

const Starter = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className={style.payments}>
      <div className="container">
        <div className={`wrapper ${style.payments__wrapper}`}>
          <div className={style.payments__top}>
            <img src={afterChatPerson5} alt="person" />

            <div className={style.payments__top__text}>
              <h4>Mohammed Shami</h4>
              <p>
                You can top up your balance in different ways and without
                commission
              </p>
            </div>
          </div>

          <div className={style.payments__list}>
            <p>Popular</p>

            <ul>
              <li>
                <img src={popular1} alt="popular payment" />
              </li>

              <li>
                <img src={popular2} alt="popular payment" />
              </li>

              <li>
                <img src={popular3} alt="popular payment" />
              </li>

              <li>
                <img src={popular4} alt="popular payment" />
              </li>

              <li>
                <img src={popular5} alt="popular payment" />
              </li>

              <li>
                <img src={popular6} alt="popular payment" />
              </li>

              <li>
                <img src={popular7} alt="popular payment" />
              </li>

              <li>
                <img src={popular8} alt="popular payment" />
              </li>

              <li>
                <img src={popular9} alt="popular payment" />
              </li>
            </ul>
          </div>

          <Link to="/">OK, let’s try!</Link>
        </div>
      </div>
    </section>
  );
};

export default Starter;
