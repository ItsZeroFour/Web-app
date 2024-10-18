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
import { useTranslation } from "react-i18next";

const AfterChat = () => {
  const [showScreenIndex, setShowScreenIndex] = useState(0);
  const { t } = useTranslation();

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
              <h1>{t("afterChat1Title")}</h1>
              <p>{t("afterChat1Text")}</p>

              <div className={style.after_chat__image}>
                <img src={afterChatImg} alt="after chat" />
              </div>
              <button onClick={() => setShowScreenIndex(1)}>
                {t("afterChat1Button")}
              </button>
            </>
          ) : showScreenIndex === 1 ? (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__first}`}
            >
              <div className={style.after_chat__message}>
                <p>{t("afterChat2Text")}</p>
              </div>

              <img src={afterChatPerson1} alt="after chat 1" />

              <button onClick={() => setShowScreenIndex(2)}>
                {t("afterChat2Button")}
              </button>
            </div>
          ) : showScreenIndex === 2 ? (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__second}`}
            >
              <div className={style.after_chat__message}>
                <p>{t("afterChat3Text")}</p>
              </div>

              <img src={afterChatPerson2} alt="after chat 2" />

              <button onClick={() => setShowScreenIndex(3)}>
                {t("afterChat3Button")}
              </button>
            </div>
          ) : showScreenIndex === 3 ? (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__third}`}
            >
              <div className={style.after_chat__message}>
                <p>{t("afterChat4Text")}</p>
              </div>

              <img src={afterChatPerson1} alt="after chat 3" />

              <button onClick={() => setShowScreenIndex(4)}>
                {t("afterChat4Button")}
              </button>
            </div>
          ) : showScreenIndex === 4 ? (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__fourth}`}
            >
              <div className={style.after_chat__person__say}>
                <img src={afterChatPerson4} alt="personal img" />

                <div>
                  <h3>{t("afterChat5Name")}</h3>
                  <p>{t("afterChat5Text")}</p>
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
                {t("afterChat5Button")}
              </button>
            </div>
          ) : showScreenIndex === 5 ? (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__second} ${style.after_chat__person__fifth}`}
            >
              <h2>{t("afterChat6Title")}</h2>

              <div className={style.after_chat__promo}>
                <p>{t("afterChat6Text")}</p>

                <Link to="/">
                  <p>{t("afterChat6Promo")}</p>
                  <img src={arrowIcon} alt="arrow" />
                </Link>
              </div>

              <img src={afterChatPerson1} alt="after chat 2" />

              <div className={style.after_chat__links}>
                <button onClick={() => setShowScreenIndex(6)}>
                  {t("afterChat6Button1")}
                </button>
                <Link to="/"> {t("afterChat6Button2")}</Link>
                <Link to="/"> {t("afterChat6Button3")}</Link>
              </div>
            </div>
          ) : (
            <div
              className={`${style.after_chat__person} ${style.after_chat__person__third} ${style.after_chat__person__sixth}`}
            >
              <div className={style.after_chat__message}>
                <p>
                  {t("afterChat7Text")}
                </p>
              </div>

              <img src={afterChatPerson2} alt="after chat 3" />

              <div className={style.after_chat__buttons}>
                <Link to="/upload-image">{t("afterChaT7Button1")}</Link>
                <Link to="/education-1">{t("afterChaT7Button2")}</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AfterChat;