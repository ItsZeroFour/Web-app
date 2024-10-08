import React from "react";
import style from "./style.module.scss";
import manImg from "../../assets/images/upload-man-1.png";
import { Link } from "react-router-dom";

const GameStart = () => {
  return (
    <section className={style.game_start}>
      <div className="container">
        <div className={`wrapper ${style.game_start__wrapper}`}>
          <div className={style.game_start__image}>
            <img src={manImg} alt="man" />
          </div>

          <div className={style.game_start__message}>
            <p>Great! Now let's make a photo together</p>
          </div>

          <div className={style.game_start__buttons}>
            <Link to="/upload-image">Let`s go</Link>
            <Link to="/">No, thanks</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameStart;
