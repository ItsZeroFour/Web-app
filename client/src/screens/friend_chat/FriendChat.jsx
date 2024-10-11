import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Banner from "../../components/banner/Banner";
import friend from "../../assets/images/friend.png";
import personalImageAvatar from "../../assets/images/personal_avatar.png";
import { motion, AnimatePresence } from "framer-motion";

const FriendChat = () => {
  const [showLink, setShowLink] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isLoanClicked, setIsLoanClicked] = useState(false);
  const [isAdviceClicked, setIsAdviceClicked] = useState(false);

  const messages = [
    {
      id: 1,
      content: "Hey, Devlan! 🤙How are you doing?",
      avatar: personalImageAvatar,
      position: "left",
    },
    {
      id: 2,
      content:
        "Hi, Raj 🤝 All good, I have bought the IPL season pass yesterday 🏏 I remember you and your sister were going too.",
      avatar: friend,
      position: "right",
    },
    {
      id: 3,
      content:
        "Yeah, that's exactly my point 😭 here's the situation, two days until the end of the sale, and I'm tight on money right now....",
      avatar: personalImageAvatar,
      position: "left",
    },
    {
      id: 4,
      content: "I see, can I help you?",
      avatar: friend,
      position: "right",
    },
    {
      id: 5,
      content:
        "Yes, can you borrow 30,000₹?🙏🙏🙏 I will definitely return it!",
      avatar: personalImageAvatar,
      position: "left",
    },
    {
      id: 6,
      content: "No, I'm sorry 😬 I don't have that much free money right now.",
      avatar: friend,
      position: "right",
    },
    {
      id: 7,
      content:
        "Please give me an advice what I can do to earn some money 🙏🙏🙏",
      avatar: personalImageAvatar,
      position: "left",
    },
    {
      id: 8,
      content:
        "You know, my cousin was telling me about some trading platform last week. I haven't had a chance to try it myself yet, but here's a link, check it out 👉 binomo.com",
      avatar: friend,
      position: "right",
    },
  ];

  const showNextMessages = (newMessages) => {
    newMessages.forEach((msg, index) => {
      setTimeout(() => {
        console.log("Rendering message:", msg); // Логирование
        setVisibleMessages((prev) => {
          if (prev.length === 2) {
            return [...prev.slice(1), msg];
          }
          return [...prev, msg];
        });
      }, index * 2500);
    });
  };

  useEffect(() => {
    const timers = messages.slice(0, 4).map((_, index) =>
      setTimeout(() => {
        setVisibleMessages((prev) => {
          if (prev.length === 2) {
            return [...prev.slice(1), messages[index]];
          }
          return [...prev, messages[index]];
        });
      }, (index + 1) * 2500)
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  useEffect(() => {
    const linkTimer = setTimeout(() => {
      setShowLink(true);
    }, 11000); // Показываем кнопки после появления 4-го сообщения

    return () => {
      clearTimeout(linkTimer);
    };
  }, []);

  const handleLoanClick = () => {
    setIsLoanClicked(true); // Скрываем кнопку "Asking for a loan", но оставляем кнопку "Asking for an advice"
    showNextMessages([messages[4], messages[5]]); // Показываем 5 и 6 сообщения
  };

  // Логика для "Asking for an advice"
  const handleAdviceClick = () => {
    setIsLoanClicked(true); // Скрываем кнопку "Asking for a loan"
    setIsAdviceClicked(true); // Скрываем кнопку "Asking for an advice"
    showNextMessages([messages[6], messages[7]]); // Показываем 7 и 8 сообщения
  };

  const firstMessageVariants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "-100vw", opacity: 0 },
  };

  const secondMessageVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100vw", opacity: 0 },
  };

  const transition = {
    type: "tween",
    duration: 0.5,
  };

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

            <div className={style.friend_chat__history}>
              <AnimatePresence>
                {visibleMessages.map(
                  (message) =>
                    message &&
                    message.position && (
                      <motion.div
                        key={message.id}
                        className={`${style.friend_chat__message} ${
                          message.position === "right"
                            ? style.friend_chat__message__last
                            : ""
                        }`}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={
                          message.position === "right"
                            ? secondMessageVariants
                            : firstMessageVariants
                        }
                        transition={transition}
                      >
                        <div
                          className={style.friend_chat__message__avatar}
                          style={
                            message.position === "right"
                              ? { order: 2 }
                              : { order: 1 }
                          }
                        >
                          <img src={message.avatar} alt="avatar" />
                        </div>

                        <div
                          className={style.friend_chat__message__content}
                          style={
                            message.position === "right"
                              ? { order: 1 }
                              : { order: 2 }
                          }
                        >
                          <p>{message.content}</p>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>

            {showLink && (
              <motion.div
                className={style.friend_chat__link}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {!isLoanClicked && (
                  <button
                    className={`${style.fadeInLink} ${showLink && style.show}`}
                    onClick={handleLoanClick}
                  >
                    Asking for a loan
                  </button>
                )}

                {!isAdviceClicked && (
                  <button
                    className={`${style.fadeInLink} ${showLink && style.show}`}
                    onClick={handleAdviceClick}
                  >
                    Asking for an advice
                  </button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendChat;
