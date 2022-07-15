import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

function Create() {
  const [err, setErr] = useState("");
  const [img, setImg] = useState();
  const [profileImg, setProfileImg] = useState();
  const [nameInput, setNameInput] = useState("");

  const handleClick = async () => {
    const formData = new FormData();

    formData.append("data", `{"name":"${nameInput}"}`);
    formData.append("files.image", img);

    axios
      .post("http://localhost:1337/api/medias", formData)
      .then(function (response) {
        setProfileImg();
        setImg();
        setNameInput("");
        console.log(response);
      })
      .catch(function (error) {
        setErr(err.message);
        console.log(error);
      });
  };

  const handleChangeName = (event) => {
    setNameInput(event.target.value);
  };

  const Input = styled("input")({
    display: "none",
  });

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    setImg(e.target.files[0]);
    console.log(img);
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          mx: "auto",
          my: "50px",
          display: "grid",
          gridTemplateRows: "repeat(2, 1fr)",
        }}
      >
        <TextField
          fullWidth
          label="name"
          id="name"
          sx={{ my: "20px" }}
          value={nameInput}
          onChange={handleChangeName}
        />
        <FormLabel id="demo-row-radio-buttons-group-label" sx={{ my: "20px" }}>
          Image
        </FormLabel>
        <label htmlFor="contained-button-file">
          <img width="500" src={profileImg}/>
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={imageHandler}
          />
          <Button variant="contained" component="span" sx={{ my: "20px" }}>
            Upload
          </Button>
        </label>

        <Box sx={{ mx: "auto" }} centered>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            size="small"
            onClick={handleClick}
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Create;
