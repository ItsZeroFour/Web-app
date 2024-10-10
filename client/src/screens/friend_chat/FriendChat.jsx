import React from "react";
import style from "./style.module.scss";
import Banner from "../../components/banner/Banner";
import friend from "../../assets/images/friend.png";

const FriendChat = () => {
  return (
    <section className={style.friend_chat}>
      <div className="container">
        <div className={`wrapper ${style.friend_chat__wrapper}`}>
          <Banner />

          <div className={style.friend_chat__container}>
            <div className={style.friend_chat__friend}>
              <div>
                <img src={friend} alt="friend" />
              </div>

              <h2>Devlan</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendChat;
