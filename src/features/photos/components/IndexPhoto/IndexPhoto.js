import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import Button from "../../../../components/Button";
import PhotoGrid from "../../../../components/PhotoGrid";

import styles from "./IndexPhoto.module.scss";

const cx = classNames.bind(styles);

function IndexPhoto() {
    return (
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
    );
}


export default IndexPhoto;