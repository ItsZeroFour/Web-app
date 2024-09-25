import React from "react";
import style from "./style.module.scss";
import phoneDown from "../../assets/icons/phone_down.svg";
import phoneUp from "../../assets/icons/phone_up.svg";
import handImage from "../../assets/images/hand.png";

const Main = () => {
  return (
    <section className={style.main}>
      <div className="container">
        <div className={`wrapper ${style.main__wrapper}`}>
          <div className={style.main__hand__image}>
            <img src={handImage} alt="hand" />
          </div>

          <div className={style.main__content}>
            <h2>Sister</h2>

            <div className={style.main__content__navigation}>
              <div className={style.main__button__down}>
                <div className={style.main__button__down__icon}>
                  <img src={phoneDown} alt="Down phone" />
                </div>

                <p>Reset</p>
              </div>
              <div className={style.main__button__up}>
                <div className={style.main__button__up__icon}>
                  <img src={phoneUp} alt="Up phone" />
                </div>

                <p>Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
