import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import logo from "../../assets/images/logo_2.svg";
import afterChatImg from "../../assets/images/after_chat.png";
import afterChatPerson1 from "../../assets/images/after-chat-1.png";
import afterChatPerson2 from "../../assets/images/after-chat-2.png";
import afterChatPerson3 from "../../assets/images/after-chat-3.png";
import afterChatPerson4 from "../../assets/images/after-chat-4.png";
import afterChatPerson5 from "../../assets/images/after-chat-5.png";
import tabImg from "../../assets/images/Tab.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Banner from "../../components/banner/Banner";

const preloadImages = (sources) => {
  sources.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const handleLeadTracking = () => {
  if (window.fbq !== undefined) {
    window.fbq("track", "CompleteRegistration");
  }

  if (window.ym) {
    window.ym(98661745, "reachGoal", "binomial_start");
  }
};

const AfterChat = () => {
  const [searchParams] = useSearchParams();
  const [showScreenIndex, setShowScreenIndex] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (+searchParams.get("index")) {
      setShowScreenIndex(+searchParams.get("index"));
    }
  }, [searchParams.get("index")]);

  useEffect(() => {
    preloadImages([
      logo,
      afterChatImg,
      afterChatPerson1,
      afterChatPerson2,
      afterChatPerson3,
      afterChatPerson4,
      afterChatPerson5,
      tabImg,
    ]);
  }, []);

  return (
    <section className={style.after_chat}>
      <div className="container">
        <div className={`wrapper ${style.after_chat__wrapper}`}>
          {showScreenIndex !== 4 && <Banner />}

          <div className={style.after_chat__content}>
            {showScreenIndex === 0 ? (
              <div
                className={`${style.after_chat__person} ${style.after_chat__person__second}`}
              >
                <div className={style.after_chat__messages}>
                  <div className={style.after_chat__message}>
                    <p>
                      Hi, I'm Andi! A few years ago, I, like you, knew nothing
                      about trading. But now I understand what needs to be done
                      here and am ready to give you a tour!
                    </p>
                  </div>

                  <div className={style.after_chat__message}>
                    <p>
                      We are on Stockity, a cutting-edge trading platform
                      designed to empower traders with the best tools and
                      services in the financial market. 
                    </p>
                  </div>
                </div>

                <img src={afterChatPerson2} alt="after chat 2" />

                <button onClick={() => setShowScreenIndex(2)}>
                  {t("afterChat3Button")}
                </button>
              </div>
            ) : showScreenIndex === 1 ? (
              <div
                className={`${style.after_chat__person} ${style.after_chat__person__second}`}
              >
                <div className={style.after_chat__messages}>
                  <div className={style.after_chat__message}>
                    <p>
                      Hi, I'm Andi! A few years ago, I, like you, knew nothing
                      about trading. But now I understand what needs to be done
                      here and am ready to give you a tour!
                    </p>
                  </div>

                  <div className={style.after_chat__message}>
                    <p>
                      We are on Stockity, a cutting-edge trading platform
                      designed to empower traders with the best tools and
                      services in the financial market. 
                    </p>
                  </div>
                </div>

                <img src={afterChatPerson2} alt="after chat 2" />

                <button onClick={() => setShowScreenIndex(2)}>
                  {t("afterChat3Button")}
                </button>
              </div>
            ) : showScreenIndex === 2 ? (
              <div
                className={`${style.after_chat__person} ${style.after_chat__person__third}`}
              >
                <div className={style.after_chat__messages}>
                  <div className={style.after_chat__message}>
                    <p>
                      You have to predict whether the price of an asset will
                      rise or fall within a specified time frame, with a fixed
                      payout if your prediction is correct.
                    </p>
                  </div>
                </div>

                <img src={afterChatPerson3} alt="after chat 3" />

                <button onClick={() => setShowScreenIndex(3)}>
                  Can I earn money here?
                </button>
              </div>
            ) : showScreenIndex === 3 ? (
              <div
                className={`${style.after_chat__person} ${style.after_chat__person__third}`}
              >
                <div className={style.after_chat__messages}>
                  <div className={style.after_chat__message}>
                    <p>
                      Yes! Trade amount starting from $1 so you won't lose a
                      large amount of funds while you're still learning how to
                      trade.
                    </p>
                  </div>
                </div>

                <img src={afterChatPerson3} alt="after chat 3" />

                <button onClick={() => navigate("/payments")}>
                  How to top up?
                </button>
              </div>
            ) : showScreenIndex === 4 ? (
              <div
                className={`${style.after_chat__person} ${style.after_chat__person__second} ${style.after_chat__person__fifth}`}
              >
                <div className={style.after_chat__person__fifth__top}>
                  <img src={afterChatPerson5} alt="person" />

                  <div className={style.after_chat__person__fifth__top__text}>
                    <h4>Mohammed Shami</h4>
                    <p>
                      You can top up your balance in different ways and without
                      commission
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`${style.after_chat__person} ${style.after_chat__person__third} ${style.after_chat__person__sixth}`}
              ></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterChat;
