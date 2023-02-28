import React from "react";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn";

const Photo = React.lazy(() => import("../pages/Photo"));

export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/photos/*", component: Photo },
    { path: "/signin", component: SignIn },
];

export const privateRoutes = [];