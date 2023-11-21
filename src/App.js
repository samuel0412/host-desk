import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/guestLogin";
import Layout from "./pages/layout";
import BusinessDetails from "./pages/businessDetails";
import HostDashborad from "./pages/hostDashborad";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<HostDashborad />} />
          <Route path="business-details" element={<BusinessDetails />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
