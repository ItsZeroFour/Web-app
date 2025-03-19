import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import bannerImg1 from "../../assets/images/banner_iphone_1.png";
import bannerImg2 from "../../assets/images/banner_iphone_2.png";
import money from "../../assets/images/money.png";
import money2 from "../../assets/images/money-2.png";
import bannerSecondaryLogo from "../../assets/images/banner_secondary_logo.svg";

const banners = [
  {
    id: 1,
    link: "/conversion",
    image1: bannerImg1,
    image2: bannerImg2,
    title: "Win iphone 16 Pro",
  },
  {
    id: 2,
    link: "/conversion",
    image1: money,
    image2: money2,
    title: "Win $500",
  },
];

const BannerSecondary = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={style.banner}
      style={
        index === 1
          ? {
              background: `#1e1e1e`,
            }
          : {
              background: `linear-gradient(
    180deg,
    rgba(255, 115, 99, 1) 0%,
    rgba(104, 115, 255, 1) 100%
  )`,
            }
      }
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={banners[index].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={banners[index].link} className={style.banner__link}>
            <img
              src={banners[index].image1}
              className={style.banner__image}
              alt="banner"
            />
            <div className={style.banner__main}>
              <img src={bannerSecondaryLogo} alt="logo" />
              <h2>{banners[index].title}</h2>
              <p>
                Warning: trading involves financial risks.{" "}
                <Link to="/">Rules</Link>
              </p>
            </div>
            <img
              src={banners[index].image2}
              className={style.banner__image}
              alt="banner"
            />
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BannerSecondary;
