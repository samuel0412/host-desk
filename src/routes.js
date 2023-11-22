import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./pages/Layout";
import BusinessDetails from "./pages/BusinessDetails";
import HostDashborad from "./pages/HostDashborad";

import Guestlogin from "./pages/GuestLogin";
import "./App.css";
import HostLoginSignUp from "./pages/HostLoginSignUp";
import OpeningHours from "./pages/OpeningHours";
import PaymentInfo from "./pages/PaymentInfo";
import TeamMembers from "./pages/TeamMembers";
import CustomerList from "./pages/CustomerList";
import Reservation from "./pages/Reservation";
import TermsAndConditions from "./pages/TermsAndConditions";

function RouteList() {
  const auth = useSelector((state) => state.Auth);
  return auth && auth.token ? (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<HostDashborad />} />
        <Route path="business-details" element={<BusinessDetails />} />
        <Route path="opening-hours" element={<OpeningHours />} />
        <Route path="payment-info" element={<PaymentInfo />} />
        <Route path="team-members" element={<TeamMembers />} />
        <Route path="customer-list" element={<CustomerList />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="terms-conditions" element={<TermsAndConditions />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route exact path="/">
        <Route index path="host-login-signup" element={<HostLoginSignUp />} />
        <Route path="guest-login-signup" element={<Guestlogin />} />
      </Route>
    </Routes>
  );
}

export default RouteList;
