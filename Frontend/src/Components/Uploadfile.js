import React, { useState } from "react";
import axios from "axios";
import { Button, Input, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Uploadfile() {
  const navigate = useNavigate(); // Access the navigate function
  const [file, setFile] = useState(null);
  const [extractedData, setExtractedData] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("result", file);

      // Upload the file to the server
      const uploadResponse = await axios.post(
        "http://localhost:5000/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (!uploadResponse.data.success) {
        console.error("Failed to upload PDF");
        return;
      }

      console.log("File uploaded successfully!");
      navigate("/analysis");
      // Fetch data from the server
    //   const fetchDataResponse = await axios.get(
    //     "http://localhost:5000/fetch-data"
    //   );

    //   if (fetchDataResponse.data) {
    //     const data = fetchDataResponse.data;
    //     console.log("Data received from server:", data);

    //     // Update the component state with the fetched data
    //     setExtractedData(data);

    //     // Redirect to /analysis3 upon successful upload
    //     navigate("/analysis3");
    //   } else {
    //     console.error("Failed to fetch data from the server");
    //   }
    } catch (error) {
      console.error("Error uploading or fetching data:", error);
    }
  };

  return (
    <Container sx={{ mt: 3, ml: -3 }}>
      <Input type="file" name="result" onChange={handleFileChange} />
      <Button onClick={handleFileUpload}>Submit</Button>

      {extractedData && (
        <div>
          <h2>Extracted Data:</h2>
          <pre>{JSON.stringify(extractedData, null, 2)}</pre>
        </div>
      )}
    </Container>
  );
}

export default Uploadfile;
