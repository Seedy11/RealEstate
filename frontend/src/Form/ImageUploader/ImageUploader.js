/** @format */
// import { useState, useEffect } from "react";

import { useRef } from "react";

// function ImageUploader() {
//   const [uploadedImages, setUploadedImages] = useState([]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const imageURL = URL.createObjectURL(file);

//     setUploadedImages((prev) => [...prev, imageURL]);
//     e.target.value = ""; // allow re-uploading same file
//   };

//   // Cleanup object URLs
//   useEffect(() => {
//     return () => {
//       uploadedImages.forEach((url) => URL.revokeObjectURL(url));
//     };
//   }, [uploadedImages]);
//   console.log("imageuploader", uploadedImages);

//   return (
//     <div>
//       <h2>Upload Images</h2>

//       <button
//         onClick={() => document.getElementById("fileInput").click()}
//         style={{ marginLeft: "10px" }}>
//         Add Image
//       </button>

//       <input
//         id='fileInput'
//         type='file'
//         accept='image/*'
//         onChange={handleImageChange}
//         style={{ display: "none" }}
//       />

//       {uploadedImages.map((src, i) => (
//         <div key={i} style={{ marginBottom: "1rem" }}>
//           <img
//             src={src}
//             alt={`Uploaded ${i + 1}`}
//             width='200'
//             style={{ display: "block", marginTop: "0.5rem" }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ImageUploader;

function ImageUploader({ dataItems, setDataItems }) {
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // store file object
    setDataItems((prev) => ({
      ...prev,
      Images: [...prev.Images, file],
    }));

    e.target.value = "";
  };

  return (
    <div>
      <h2>Upload Images</h2>
      <button onClick={() => inputRef.current.click()}>Add Image</button>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      {dataItems.Images.map((file, i) => (
        <img
          key={i}
          src={URL.createObjectURL(file)}
          alt={file.name}
          width='200'
          style={{ display: "block", marginTop: "10px" }}
        />
      ))}
    </div>
  );
}
export default ImageUploader;
