import axios from "axios";
import React, { useState } from "react";
import Compressor from "compressorjs";

const UploadScreen = () => {
  const [image, setImage] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleChangeFile = async (event) => {
    try {
      const file = event.target.files[0];

      new Compressor(file, {
        quality: 0.6,

        success(res) {
          const reader = new FileReader();

          reader.onloadend = () => {
            setImage(res.result);
          };

          reader.readAsDataURL(file);
        },
        error(err) {
          console.log(err.message);
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const uploadImage = async () => {
    try {
      if (!image) return;

      const response = await fetch(image);
      const blob = await response.blob();
      const file = new File([blob], "screenshot.jpeg", { type: "image/jpeg" });

      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/upload`,
          formData
        );

        if (res.data.message === "Успешно") {
          alert("Изображение успешно загружено!");

          const uploadImage = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/uploadImage`
          );

          console.log(uploadImage);

          setIsSaved(true);
        } else {
          throw new Error("Ошибка при загрузке изображения");
        }
      } catch (err) {
        console.log(err);
      }
    } catch (err) {}
  };

  return (
    <div>
      <input
        id="create-post-img"
        type="file"
        hidden
        onChange={handleChangeFile}
        accept=".jpg, .png, .jpeg"
      />
      <label
        style={{
          padding: 10,
          background: "#fff",
          display: "block",
          textAlign: "center",
        }}
        htmlFor="create-post-img"
      >
        Загрузить
      </label>

      {image && (
        <div>
          <img
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
            src={image}
          />
          <button onClick={uploadImage} disabled={isSaved}>
            Норм, загрузить фотку
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadScreen;
