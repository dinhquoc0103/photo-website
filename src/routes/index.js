import React from "react";
// import Photo from "../pages/Photo";
import SignIn from "../pages/SignIn";

const Photo = React.lazy(() => import("../pages/Photo"));

export const publicRoutes = [
    { path: "/photos", component: Photo },
    { path: "/signin", component: SignIn },
];

export const privateRoutes = [];