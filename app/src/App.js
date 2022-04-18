import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Homepage } from "./components/Homepage";
import { Login } from "./components/Login";
import { Settings } from "./components/Settings";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PrivateRoutes } from "./components/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/settings"
          element={
            <PrivateRoutes>
              <Settings />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
