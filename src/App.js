import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/layout";
import BusinessDetails from "./pages/businessDetails";
import HostDashborad from "./pages/hostDashborad";
import HostLoginSignUp from "./pages/HostLoginSignUp";
import Guestlogin from "./pages/guestLogin";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<HostDashborad />} />
          <Route path="business-details" element={<BusinessDetails />} />
        </Route>
        <Route path="host-login-signup" element={<HostLoginSignUp />} />
        <Route path="guest-login-signup" element={<Guestlogin />} />
      </Routes>
    </>
  );
}

export default App;
