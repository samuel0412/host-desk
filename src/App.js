import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import HostLoginSignUp from "./pages/HostLoginSignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="host-login-signup" element={<HostLoginSignUp />} />
      </Routes>
    </>
  );
}

export default App;
