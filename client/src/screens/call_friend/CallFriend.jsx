import React from "react";
import style from "./style.module.scss";
import friendImg from "../../assets/images/dewlan.png";
import reset from "../../assets/icons/phone_down.svg";

const CallFriend = () => {
  return (
    <section className={style.call_friend}>
      <div className="container">
        <div className={`wrapper ${style.call_friend__wrapper}`}>
          <img src={friendImg} alt="friend devlan" />

          <div className={style.call_friend__panel}>
            <h1>Devlan</h1>

            <div className={style.call_friend__reset}>
              <div>
                <img src={reset} alt="reset" />
              </div>

              <p>Reset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallFriend;
