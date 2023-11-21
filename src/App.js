import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./pages/layout";
import BusinessDetails from "./pages/businessDetails";
import HostDashborad from "./pages/hostDashborad";
import HostLoginSignUp from "./pages/HostLoginSignUp";
import Guestlogin from "./pages/guestLogin";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<>Loading</>} persistor={persistor}>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<HostDashborad />} />
            <Route path="business-details" element={<BusinessDetails />} />
          </Route>
          <Route path="host-login-signup" element={<HostLoginSignUp />} />
          <Route path="guest-login-signup" element={<Guestlogin />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
