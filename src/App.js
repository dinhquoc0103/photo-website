import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
