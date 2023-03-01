import { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { fetchUser } from "./features/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import { publicRoutes } from "./routes";

import MainLayout from "./layout/MainLayout";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {
          publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout === null ? Fragment : (route.layout || MainLayout);

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })
        }
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
