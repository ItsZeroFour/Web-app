import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Banner from "../../components/banner/Banner";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import personalImageAvatar from "../../assets/images/personal_avatar.png";
import groupChatImage from "../../assets/images/group_chat.png";
import sister from "../../assets/images/sister_avatar.png";
import friend from "../../assets/images/friend.png";

const GroupChat = () => {
  const [showFirstMessage, setShowFirstMessage] = useState(false);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showThirdMessage, setShowThirdMessage] = useState(false);
  const [showLink, setShowLink] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const firstMessageTimer = setTimeout(() => {
      setShowFirstMessage(true);
    }, 0);

    const secondMessageTimer = setTimeout(() => {
      setShowSecondMessage(true);
    }, 2000);

    const thirdMessageTimer = setTimeout(() => {
      setShowThirdMessage(true);
    }, 4000);

    const linkTimer = setTimeout(() => {
      setShowLink(true);
    }, 5000);

    return () => {
      clearTimeout(firstMessageTimer);
      clearTimeout(secondMessageTimer);
      clearTimeout(thirdMessageTimer);
      clearTimeout(linkTimer);
    };
  }, []);

  const firstMessageVariants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const secondMessageVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const transition = {
    type: "tween",
    duration: 0.5,
  };

  return (
    <section className={style.group_chat}>
      <div className="container">
        <div className={`wrapper ${style.group_chat__wrapper}`}>
          <Banner />
          <div className={style.first__chat__user}>
            <div className={style.first__chat__avatar}>
              <img src={groupChatImage} alt="Sister" />
            </div>

            <h3>{t("groupTitle")}</h3>
          </div>

          <div className={style.first__chat__history}>
            {showFirstMessage && (
              <motion.div
                className={`${style.first__chat__message} ${style.first__chat__message__last}`}
                initial="hidden"
                animate="visible"
                variants={secondMessageVariants}
                transition={transition}
              >
                <div className={style.first__chat__message__content}>
                  <p>{t("groupMessage1")}</p>
                </div>
                <div className={style.first__chat__message__avatar}>
                  <img src={personalImageAvatar} alt="personal avatar" />
                </div>
              </motion.div>
            )}

            {showSecondMessage && (
              <motion.div
                className={style.first__chat__message}
                initial="hidden"
                animate="visible"
                variants={firstMessageVariants}
                transition={transition}
              >
                <div className={style.first__chat__message__avatar}>
                  <img src={sister} alt="sister avatar" />
                </div>
                <div className={style.first__chat__message__content}>
                  <p>{t("groupMessage2")}</p>
                </div>
              </motion.div>
            )}

            {showThirdMessage && (
              <motion.div
                className={style.first__chat__message}
                initial="hidden"
                animate="visible"
                variants={firstMessageVariants}
                transition={transition}
              >
                <div className={style.first__chat__message__avatar}>
                  <img src={friend} alt="sister avatar" />
                </div>
                <div className={style.first__chat__message__content}>
                  <p>{t("groupMessage3")}</p>
                </div>
              </motion.div>
            )}
          </div>

          {showLink && (
            <motion.div
              className={style.first__chat__link}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/final"
                className={`${style.fadeInLink} ${showLink && style.show}`}
              >
                {t("groupButton")}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GroupChat;
