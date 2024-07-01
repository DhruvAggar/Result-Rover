import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Grid,
  Button,
  Avatar,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom"; 

function Login() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "rememberMe" ? checked : value,
    }));
  };

  const handleSignIn = async () => {
    const isAuthenticated = await Authentication(formData);

    if (isAuthenticated) {
      navigate("/home");
      console.log("Authentication Successful!");
    } else {
      window.alert("Authentication Failed!");
    }
  };

  const Authentication = async (credentials) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isAuthenticated =
          credentials.username === "dtc@campus" &&
          credentials.password === "password";
        resolve(isAuthenticated);
      }, 1000);
    });
  };

  return (
    <Box>
      <Grid>
        <Paper
          elevation={10}
          sx={{
            px: 3,
            py: 3,
            height: "60vh",
            width: 280,
            mt: "50px",
            mx: "auto",
          }}
        >
          <Grid align="center">
            <Avatar sx={{ mb: 2, bgcolor: "#1976d2" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
              Login
            </Typography>
            <TextField
              label="Username"
              fullWidth
              sx={{ mb: 2 }}
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <TextField
              label="Password"
              fullWidth
              sx={{ mb: 2 }}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                }
                label="Remember me"
                sx={{ mb: 2 }}
              />
            </FormGroup>
            <Button variant="contained" fullWidth onClick={handleSignIn}>
              Sign In
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
}

export default Login;
