import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import gifs from "../../assets/icons/gifs.png";
import coins from "../../assets/icons/coins.png";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Banner = () => {
  const [text, setText] = useState("Win $200");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => (prevText === "Win $200" ? "binomo" : "Win $200"));
    }, 4000); // меняем текст каждые 3 секунды
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.banner}>
      <Link to="/123">
        <img src={gifs} alt="gifs" />
        <div className={style.banner__text}>
          <h2>
            {text === "binomo" && (
              // <img src={logo} alt="logo" style={{ width: 30, height: 30 }} />
              <svg
                width="20"
                height="30"
                viewBox="0 0 20 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.587 0.559302C9.73956 -0.592068 7.37732 0.0912015 6.31073 2.08542L0.518123 12.9152C-0.548476 14.9095 0.0844858 17.4595 1.93188 18.6109C3.77927 19.7623 6.14152 19.079 7.2081 17.0848L13.0007 6.25493C14.0673 4.26069 13.4343 1.71067 11.587 0.559302Z"
                  fill="#353535"
                />
                <path
                  d="M17.3873 11.3891C15.5399 10.2377 13.1777 10.921 12.1111 12.9152L6.31846 23.7451C5.25186 25.7393 5.88483 28.2893 7.73222 29.4407C9.57961 30.5921 11.9419 29.9088 13.0084 27.9146L18.8011 17.0847C19.8676 15.0905 19.2347 12.5405 17.3873 11.3891Z"
                  fill="#353535"
                />
              </svg>
            )}
            {text}
          </h2>
          <p>
            Warning: trading involves financial risks. <Link to="/">Rules</Link>
          </p>
        </div>
        <img src={coins} alt="coins" />
      </Link>
    </div>
  );
};

export default Banner;
