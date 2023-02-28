import { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { fetchUser } from "./features/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { publicRoutes } from "./routes";

import MainLayout from "./layout/MainLayout";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Is logged")
        try {
          const resultAction = await dispatch(fetchUser());
          const originalPromiseResult = unwrapResult(resultAction);
        }
        catch (error) {
          console.log("Failed to log in: " + error.message);
        }

        return;
      }

      console.log("Is not logged")

    })

    return () => unregisterAuthObserver();
  });

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
    </BrowserRouter>
  );
}

export default App;
