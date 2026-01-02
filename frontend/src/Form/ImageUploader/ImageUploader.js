/** @format */
import React, { useRef } from "react";
import styled from "styled-components";

const UploaderContainer = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;

const UploadButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const PreviewImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

function ImageUploader({ dataItems, setDataItems }) {
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setDataItems((prev) => ({
      ...prev,
      Images: [...prev.Images, file],
    }));

    e.target.value = "";
  };

  return (
    <UploaderContainer>
      <h2>Upload Property Images</h2>
      <UploadButton onClick={() => inputRef.current.click()}>
        Add Image
      </UploadButton>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <PreviewContainer>
        {dataItems.Images.map((file, i) => (
          <PreviewImage
            key={i}
            src={URL.createObjectURL(file)}
            alt={file.name}
          />
        ))}
      </PreviewContainer>
    </UploaderContainer>
  );
}

export default ImageUploader;
