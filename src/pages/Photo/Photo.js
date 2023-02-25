import { Link, Routes, Route } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Photo.module.scss";
import Images from "../../constants/images";
import { publicPhotoRoutes } from "../../routes/photoRoutes";

import Banner from "../../components/Banner";
import Button from "../../components/Button";

const cx = classNames.bind(styles);

function Photo() {
    return (
        <>
            <Banner
                title="Your amazings photos"
                backgroundImg={Images.ColorfulBackground}
            />

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
                </Routes>
            </div>
        </>
    );
}

export default Photo;