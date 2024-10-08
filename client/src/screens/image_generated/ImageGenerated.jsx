import React, { useEffect } from "react";
import style from "./style.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ImageGenerated = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { aiImageName } = location.state || {};

  useEffect(() => {
    if (!aiImageName) {
      return navigate("/upload-image");
    }
  }, [aiImageName]);

  return (
    <section className={style.image_generation}>
      <div className="container">
        <div className={`wrapper ${style.image_generation__wrapper}`}>
          <img
            src={`${process.env.REACT_APP_SERVER_URL.replace(
              "/api",
              ""
            )}/savedAi/${aiImageName}`}
            alt="ai image"
          />

          <div className={style.image_generation__wrapper__buttons}>
            <button>Share with friends</button>
            <Link to="/upload-image">Try another photo</Link>
            <Link to="/final">Talk with Shami</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerated;
