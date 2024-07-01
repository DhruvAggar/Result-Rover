import { Container } from "@mui/material";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Analysis3 from "./Components/Analysis3";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/analysis" element={<Analysis3 />} />
        </Routes>
        {/* <Home /> */}
        {/* <Login /> */}
      </Container>
    </div>
  );
}

export default App;
