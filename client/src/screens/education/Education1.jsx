import React from "react";
import style from "./style.module.scss";
import screen1 from "../../assets/images/education/first-screen-1.png";
import screen2 from "../../assets/images/education/first-screen-2.png";
import person from "../../assets/images/after-chat-1.png";
import { Link } from "react-router-dom";

const Edication1 = () => {
  return (
    <section className={style.education}>
      <div className="container">
        <div className={`wrapper ${style.education__wrapper}`}>
          <div className={style.education__screens}>
            <img src={screen1} alt="screen 1" />
            <img src={screen2} alt="screen 2" />
          </div>

          <div className={style.education__person}>
            <img src={person} alt="person" />

            <div>
              <h3>Mohammed Shami</h3>
              <p>
                Binomo has many educational lectures that will help you learn
                how to trade
              </p>
            </div>
          </div>

          <Link to="/education-2">SOUNDS GOOD</Link>
        </div>
      </div>
    </section>
  );
};

export default Edication1;
