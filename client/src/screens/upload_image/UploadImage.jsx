import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import cameraImg from "../../assets/icons/camera.svg";
import imageImg from "../../assets/icons/image.svg";
import { useNavigate } from "react-router-dom";

const UploadImage = () => {
  const [check, setCheck] = useState(false);
  const [isCamera, setIsCamera] = useState(false);
  const navigate = useNavigate();

  async function checkCamera() {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.error("API not supported.");
        setIsCamera(false);
      }

      const devices = await navigator.mediaDevices.enumerateDevices();

      const videoInputDevices = devices.filter(
        (device) => device.kind === "videoinput"
      );

      if (videoInputDevices.length > 0) {
        setIsCamera(true);
      } else {
        setIsCamera(false);
      }
    } catch (error) {
      console.error(error);
      setIsCamera(false);
    }
  }

  useEffect(() => {
    checkCamera();
  }, []);

  return (
    <section className={style.upload_image}>
      <div className="container">
        <div className={`wrapper ${style.upload_image__wrapper}`}>
          <h1>Take a photo with Shami</h1>

          <div
            className={style.upload_image__checkbox}
            onClick={() => setCheck(!check)}
          >
            <div className={style.upload_image__checkbox__item}>
              {check ? <div></div> : ""}
            </div>
            <p>
              By checking this box, You confirm that You have read, understood,
              and agree to be bound by these Rules of Use 
            </p>
          </div>

          <div
            className={style.upload_image__buttons}
            style={!check ? { opacity: 0.5 } : { opacity: 1 }}
          >
            <button
              disabled={!check}
              onClick={() =>
                check &&
                (isCamera
                  ? navigate("/upload-image/camera")
                  : navigate("/upload"))
              }
            >
              <img src={cameraImg} alt="camera" />
              <h2>Take a photo</h2>
              <p>AI will generate photo with you and Mohhamed Shami</p>
            </button>

            <button disabled={!check}>
              <img src={imageImg} alt="image" />
              <h2>Upload an image</h2>
              <p>AI will generate photo with you and Mohhamed Shami</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadImage;
