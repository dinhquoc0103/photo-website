import React from "react";
import SignIn from "../pages/SignIn";
import AddPhoto from "../pages/AddPhoto";
import EditPhoto from "../pages/EditPhoto";

const Photo = React.lazy(() => import("../pages/Photo"));

export const publicRoutes = [
    { path: "/photos", component: Photo },
    { path: "/photos/add", component: AddPhoto },
    { path: "/photos/:id", component: EditPhoto },
    { path: "/signin", component: SignIn },
];

export const privateRoutes = [];