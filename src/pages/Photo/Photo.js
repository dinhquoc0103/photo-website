import { Routes, Route } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Photo.module.scss";
import Images from "../../constants/images";
import { privatePhotoRoutes, publicPhotoRoutes } from "../../routes/photoRoutes";
import ProtectedRoute from "../../routes/protectedRoute";

import Banner from "../../components/Banner";
import withRouter from "../../utils/withRouter";

const cx = classNames.bind(styles);

function Photo() {

    const BannerWithRouter = withRouter(Banner);

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
                </Routes>
            </div>
        </>
    );
}

export default Photo;