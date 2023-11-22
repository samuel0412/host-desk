import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import RouteList from "./routes";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<>Loading</>} persistor={persistor}>
        <RouteList />
      </PersistGate>
    </Provider>
  );
}

export default App;
