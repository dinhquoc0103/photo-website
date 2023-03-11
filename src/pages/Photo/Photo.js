import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import { useTitle } from "../../hooks";

import styles from "./Photo.module.scss";
import { privatePhotoRoutes, publicPhotoRoutes } from "../../routes/photoRoutes";
import ProtectedRoute from "../../routes/protectedRoute";

import Banner from "../../components/Banner";
import withRouter from "../../utils/withRouter";

const cx = classNames.bind(styles);

function Photo() {
    const [title, setTitle] = useState("");

    const { pathname } = useLocation();

    const BannerWithRouter = withRouter(Banner);

    useTitle(title);

    useEffect(() => {
        let title;
        switch (pathname) {
            case "/photos":
                title = "Photos"
                break;
            case "/photos/add":
                title = "Add Photo"
                break;

            default:
                title = "Edit Photo"
                break;
        }
        setTitle(title);
    }, [pathname]);

    return (
        <>
            <BannerWithRouter />

            <div className={cx("container")}>

                <Routes>
                    {
                        publicPhotoRoutes.map((photoRoute, index) => {
                            const Component = photoRoute.component;

                            if (photoRoute.path === "index") {
                                return <Route
                                    index
                                    element={<Component />}
                                />
                            }
                            else {
                                return <Route
                                    path={photoRoute.path}
                                    element={<Component />}
                                />
                            }
                        })
                    }
                    {
                        privatePhotoRoutes.map((photoRoute, index) => {
                            const Component = photoRoute.component;

                            return <Route
                                path={photoRoute.path}
                                element={
                                    <ProtectedRoute>
                                        <Component />
                                    </ProtectedRoute>
                                }
                            />
                        })
                    }
                    <Route path="*" element={<Navigate to="/not-found" />} />
                </Routes>
            </div>
        </>
    );
}

export default Photo;