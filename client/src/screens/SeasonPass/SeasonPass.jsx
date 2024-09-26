import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import glowes from "../../assets/images/glowes.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bank from "../../assets/icons/bank.svg";

const SeasonPass = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const linkTimer = setTimeout(() => {
        setShowLink(true);
      }, 1200);

      return () => clearTimeout(linkTimer);
    }
  }, [showNotification]);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const fadeTransition = {
    duration: 0.5,
  };

  const notificationVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const transition = {
    type: "tween",
    duration: 1,
  };

  return (
    <motion.section
      className={style.season_pass}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeVariants}
      transition={fadeTransition}
    >
      <div className="container">
        <div className={`wrapper ${style.season_pass__wrapper}`}>
          <div className={style.season_pass__main}>
            <div className={style.season_pass__text}>
              <h1>IPL Season Pass, 33500₹</h1>
              <p>Until the end of sales: 2 days</p>
            </div>

            <img src={glowes} alt="glowes" />

            <button onClick={() => setShowNotification(true)}>Buy pass</button>
          </div>

          {showNotification && (
            <motion.div
              className={style.season_pass__notification}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeVariants}
              transition={fadeTransition}
            >
              <motion.div
                className={style.season_pass__bank}
                initial="hidden"
                animate="visible"
                variants={notificationVariants}
                transition={transition}
              >
                <img src={bank} alt="bank" />

                <div className={style.season_pass__notification__text}>
                  <div>
                    <h3>Bank</h3>
                    <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
                  </div>

                  <p>You don't have enough funds. Balance: 6547₹</p>
                </div>
              </motion.div>

              {showLink && (
                <motion.div
                  className={style.season_pass__notification__link}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to="/">Call a friend for advice</Link>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default SeasonPass;
