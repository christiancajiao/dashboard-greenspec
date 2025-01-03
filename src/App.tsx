/* eslint-disable @typescript-eslint/ban-ts-comment */
import style from "./App.module.scss";
// @ts-ignore
import LoginProvider from "./Providers/LoginProvider/LoginProvider";
// @ts-ignore
import DataProvider from "./Providers/DataProvider/DataProvider";
// @ts-ignore

import DashboardContainer from "./components/Dashboard/DashboardContainer/DashboardContainer";
// @ts-ignore

import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { useState } from "react";
// @ts-ignore

import Modal from "./components/Modal/Modal.jsx";
// @ts-ignore

import ModalProvider from "./Providers/ModalProvider/ModalProvider.jsx";
import { Route, Routes } from "react-router";
// @ts-ignore

import Profile from "./components/Profile/Profile.jsx";
// @ts-ignore

import Contact from "./components/Contact/Contact.jsx";
// @ts-ignore

import Settings from "./components/Settings/Settings.jsx";
import menu from "./assets/menu.svg";
// @ts-ignore

import Login from "./components/Login/Login.jsx";
// @ts-ignore

import ProtectedRoute from "./ProtectedRoute.jsx";

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
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <div className={style.layout}>
                      <div className={style.topbar}>
                        <button onClick={toggleSidebar}>
                          <img src={menu} />
                        </button>
                        KANUT
                      </div>

                      <div className={style.column_aligment}>
                        <div
                          className={style.sidebar}
                          style={{ display: toggle }}
                        >
                          <Sidebar />
                        </div>
                        <div className={style.content}>
                          <Routes>
                            <Route
                              path="dashboard"
                              element={<DashboardContainer />}
                            />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/settings" element={<Settings />} />
                          </Routes>
                        </div>
                      </div>
                    </div>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </DataProvider>
        </ModalProvider>
      </LoginProvider>
    </>
  );
}

export default App;
