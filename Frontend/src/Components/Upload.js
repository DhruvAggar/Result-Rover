import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FormData from "form-data";
import Axios from "axios";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload() {
  const [file, setFile] = useState(null);
  const upload = (e) => {
    // e.preventDefault();
    let formData = new FormData();
    formData.append("result", file);
    Axios.post("http://localhost:5000/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      onClick={(e) => upload(e)}
    >
      Upload file
      <VisuallyHiddenInput
        type="file"
        name="result"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
    </Button>
  );
}
