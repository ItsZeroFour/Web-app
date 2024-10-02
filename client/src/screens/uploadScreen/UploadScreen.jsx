import axios from "axios";
import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const UploadScreen = () => {
  const [image, setImage] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState("");

  const handleChangeFile = async (event) => {
    try {
      const file = event.target.files[0];

      const options = {
        maxSizeMB: 1, // Максимальный размер изображения после сжатия в MB
        maxWidthOrHeight: 800, // Максимальная ширина или высота изображения
        useWebWorker: true, // Использовать Web Worker для улучшения производительности
      };

      const maxSizeInBytes = 5 * 1024 * 1024;

      if (file.size > maxSizeInBytes) {
        setError("Размер файла превышает 5 MB");
        return;
      }

      const compressedFile = await imageCompression(file, options);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(compressedFile);
    } catch (err) {
      console.log(err);
    }
  };

  const uploadImage = async () => {
    try {
      if (!image) return;

      const response = await fetch(image);
      const blob = await response.blob();
      const file = new File([blob], `${Date.now()}.jpeg`, {
        type: "image/jpeg",
      });

      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/upload`,
          formData
        );

        const neyroFormData = new FormData();

        neyroFormData.append("image", file);
        neyroFormData.append("overwrite", "false");
        neyroFormData.append("subfolder", "");
        neyroFormData.append("type", "input");

        await axios
          .post("http://62.68.147.244:35525/upload/image", neyroFormData)
          .then((response) => {
            console.log("Response:", response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        if (res.data.url) {
          alert("Изображение успешно загружено!");

          const uploadImageRes = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/uploadImage`,
            { filename: res.data.url }
          );

          console.log(uploadImageRes);

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

      {error && <p>{error}</p>}
    </div>
  );
};

export default UploadScreen;
