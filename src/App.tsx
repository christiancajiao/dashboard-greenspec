import style from "./App.module.scss";
import LoginProvider from "./Providers/LoginProvider/LoginProvider";
import DataProvider from "./Providers/DataProvider/DataProvider";
import DashboardContainer from "./components/Dashboard/DashboardContainer/DashboardContainer";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { useState } from "react";
import Modal from "./components/Modal/Modal.jsx";
import ModalProvider from "./Providers/ModalProvider/ModalProvider.jsx";
import { Route, Routes } from "react-router";
import Profile from "./components/Profile/Profile.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Settings from "./components/Settings/Settings.jsx";

function App() {
  const [toggle, setToggle] = useState("block");
  function toggleSidebar() {
    setToggle(toggle === "block" ? "none" : "block");
  }
  return (
    <>
      <LoginProvider>
        <ModalProvider>
          <DataProvider>
            <Modal />
            <div className={style.layout}>
              <div className={style.topbar}>
                <button onClick={toggleSidebar}>-</button> KANUT
              </div>

              <div className={style.column_aligment}>
                <div className={style.sidebar} style={{ display: toggle }}>
                  <Sidebar />
                </div>
                <div className={style.content}>
                  <Routes>
                    <Route path="/dashboard" element={<DashboardContainer />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
            </div>
          </DataProvider>
        </ModalProvider>
      </LoginProvider>
    </>
  );
}

export default App;