import React from "react";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";

const Photo = React.lazy(() => import("../pages/Photo"));

export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/photos/*", component: Photo },
    { path: "/signin", component: SignIn },
    { path: "/not-found", component: NotFound },
];

export const privateRoutes = [];