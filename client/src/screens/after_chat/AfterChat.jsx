import React, { useState } from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo_2.svg";
import afterChatImg from "../../assets/images/after_chat.png";
import afterChatPerson1 from "../../assets/images/after-chat-1.png";
import afterChatPerson2 from "../../assets/images/after-chat-2.png";
import afterChatPerson4 from "../../assets/images/after-chat-4.png";
import popularItem1 from "../../assets/images/popular/item1.png";
import popularItem2 from "../../assets/images/popular/item2.png";
import popularItem3 from "../../assets/images/popular/item3.png";
import popularItem4 from "../../assets/images/popular/item4.png";
import popularItemQr from "../../assets/images/popular/qr.png";
import arrowIcon from "../../assets/icons/arrow.svg";
import { Link } from "react-router-dom";

const AfterChat = () => {
  const [showScreenIndex, setShowScreenIndex] = useState(0);

  return (
    <section className={style.after_chat}>
      <div className="container">
        <div className={`wrapper ${style.after_chat__wrapper}`}>
          {showScreenIndex !== 4 && (
            <div className={style.after_chat__header}>
              <img src={logo} alt="logo" />

              <div className={style.after_chat__menu}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}

          {showScreenIndex === 0 ? (
            <>
              <h1>Don’t give up, and you can gain</h1>
              <p>Become successful on Binomo like Mohammed Shami in cricket</p>

              <div className={style.after_chat__image}>
                <img src={afterChatImg} alt="after chat" />
              </div>
              <button onClick={() => setShowScreenIndex(1)}>Next</button>
            </>
          ) : showScreenIndex === 1 ? (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__first}`}
            >
              <div className={style.after_chat__message}>
                <p>Hey! Nice to meet you!</p>
              </div>

              <img src={afterChatPerson1} alt="after chat 1" />

              <button onClick={() => setShowScreenIndex(2)}>
                Wow, Mohammed Shami!
              </button>
            </div>
          ) : showScreenIndex === 2 ? (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__second}`}
            >
              <div className={style.after_chat__message}>
                <p>
                  We are on Binomo website! Binomo is a  high-end trading
                  platform with a wide range of financial assets.
                </p>
              </div>

              <img src={afterChatPerson2} alt="after chat 2" />

              <button onClick={() => setShowScreenIndex(3)}>
                Can I earn money here?
              </button>
            </div>
          ) : showScreenIndex === 3 ? (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__third}`}
            >
              <div className={style.after_chat__message}>
                <p>
                  Yes! Trade amount starting from $1so you won't lose a large
                  amount of funds while you're still learning how to trade.
                </p>
              </div>

              <img src={afterChatPerson1} alt="after chat 3" />

              <button onClick={() => setShowScreenIndex(4)}>
                Can I train before trading?
              </button>
            </div>
          ) : showScreenIndex === 4 ? (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__fourth}`}
            >
              <div className={style.after_chat__person__say}>
                <img src={afterChatPerson4} alt="personal img" />

                <div>
                  <h3>Mohammed Shami</h3>
                  <p>
                    You can top up your balance in different ways and without
                    commission
                  </p>
                </div>
              </div>

              <div className={style.after_chat__popular}>
                <p>Popular</p>
                <ul>
                  <li>
                    <img src={popularItem1} alt="popular item" />
                    <p>Upi</p>
                  </li>

                  <li>
                    <img src={popularItem1} alt="popular item" />
                    <img src={popularItemQr} alt="popular item" />
                    <p>Upi QR</p>
                  </li>

                  <li>
                    <img src={popularItem2} alt="popular item" />
                    <img src={popularItem1} alt="popular item" />
                    <p>PhonePe by UPI</p>
                  </li>

                  <li>
                    <div
                      style={{
                        padding: "5px 10px",
                        background: "#fff",
                        borderRadius: 20,
                      }}
                    >
                      <img src={popularItem3} alt="popular item" />
                    </div>
                    <img src={popularItem1} alt="popular item" />
                    <p>Google Pay by UPI</p>
                  </li>

                  <li>
                    <img src={popularItem4} alt="popular item" />
                    <img src={popularItem1} alt="popular item" />
                    <p>Paytm by UPI</p>
                  </li>
                </ul>
              </div>

              <button onClick={() => setShowScreenIndex(5)}>
                So I can easily earn here?
              </button>
            </div>
          ) : showScreenIndex === 5 ? (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__second} ${style.after_chat__person__fifth}`}
            >
              <h2>
                Thousands of traders make a net profit on the Bonomo platform
                every day. Join them today
              </h2>

              <div className={style.after_chat__promo}>
                <p>The ticket in the drawing is $1000</p>

                <Link to="/">
                  <p>GAME1000</p>
                  <img src={arrowIcon} alt="arrow" />
                </Link>
              </div>

              <img src={afterChatPerson1} alt="after chat 2" />

              <div className={style.after_chat__links}>
                <button onClick={() => setShowScreenIndex(6)}>
                  Stay in the game
                </button>
                <Link to="/">Go to Binomo</Link>
                <Link to="/">Promotion rules</Link>
              </div>
            </div>
          ) : (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__third} ${style.after_chat__person__sixth}`}
            >
              <div className={style.after_chat__message}>
                <p>
                  I know that you have to earn money to buy IPL season pass. You
                  can earn it here, but I kindly recommend you to pass education
                  first...
                </p>
              </div>

              <img src={afterChatPerson2} alt="after chat 3" />

              <div className={style.after_chat__buttons}>
                <Link to="/upload-image">Let's try right now!</Link>
                <Link to="/education-1">Let's start from education</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AfterChat;
