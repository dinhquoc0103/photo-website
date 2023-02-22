import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Photo.module.scss";
import Images from "../../constants/images";

import Banner from "../../components/Banner";
import Button from "../../components/Button";
import PhotoGrid from "../../components/PhotoGrid";

const cx = classNames.bind(styles);

function Photo() {
    return (
        <>
            <Banner
                title="Your amazings photos"
                backgroundImg={Images.ColorfulBackground}
            />

            <div className={cx("container")}>
                <div className={cx("photo")}>
                    <div className={cx("photo-adding")}>
                        <Link to="/photos/add">
                            <Button className={["btn"]}>
                                Add New Photo
                            </Button>
                        </Link>
                    </div>

                    <PhotoGrid />
                </div>
            </div>
        </>
    );
}

export default Photo;