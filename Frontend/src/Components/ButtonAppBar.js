import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import InputFileUpload from "./Upload";
import Axios from "axios";

import {
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import ReactTableToExcel from "react-table-to-excel";

export default function ButtonAppBar() {
  const handleDownloadClick = () => {
    Axios.post("http://localhost:5000/run-python-script");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Result Rover
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleDownloadClick}
            sx={{ "mr": 2 }}
          >
            Analyze
          </Button>
          <Button variant="contained" 
          color="inherit"
          >
            <Link color="primary" underline="none" href="http://localhost:5000/download">
              Download
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
