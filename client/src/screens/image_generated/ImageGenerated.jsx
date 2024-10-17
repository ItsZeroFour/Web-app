import React, { useEffect } from "react";
import style from "./style.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ImageGenerated = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
            )}/aiGet/${aiImageName}`}
            alt="ai image"
          />

          <div className={style.image_generation__wrapper__buttons}>
            <button>{t("imageGeneratedButton1")}</button>
            <Link to="/upload-image">{t("imageGeneratedButton2")}</Link>
            <Link to="/final">{t("imageGeneratedButton3")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerated;
