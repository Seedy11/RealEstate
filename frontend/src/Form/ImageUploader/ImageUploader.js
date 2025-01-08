/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function ImageUploader({ submit }) {
  // const [image_url, setImage] = useState();
  // const postData = (e) => {
  //   axios
  //     .post("http://localhost:3001/rentalProperties/imageUpload", {
  //       image_url: image_url,
  //     })
  //     .then(() => {
  //       console.log("success");
  //     });
  // };

  // return (
  //   <form
  //     method='POST'
  //     action='http://localhost:3001/rentalProperties/imageUpload'
  //     encType='multipart/form-data'>
  //     <h1>Image uplaoder</h1>
  //     <input
  //       type='file'
  //       name='image'
  //       // id='image'
  //       // onChange={(e) => setImage(e.target.files[0])}
  //       // accept='image/png, image/jpeg'
  //     />
  //     <Button
  //       variant='primary'
  //       type='submit'
  //       // onClick={(e) => {
  //       //   e.preventDefault();
  //       //   // userValidation(e.target.value);
  //       //   console.log("test66", image_url);
  //       //   postData(image_url);
  //       // }}
  //     >
  //       Submit
  //     </Button>
  //   </form>
  // );

  const [file, setFile] = useState();

  return (
    <div className='row'>
      <Form onSubmit={(e) => submit(e, file)}>
        <input
          filename={file}
          onChange={(e) => setFile(e.target.files[0])}
          type='file'
          accept='image/*'></input>

        <button>Submit</button>
      </Form>
    </div>
  );
}

export default ImageUploader;
