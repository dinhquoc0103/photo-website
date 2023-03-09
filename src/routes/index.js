import Home from "../pages/Home";
import Photo from "../pages/Photo";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";

export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/photos/*", component: Photo },
    { path: "/signin", component: SignIn },
    { path: "/not-found", component: NotFound },
];

export const privateRoutes = [];