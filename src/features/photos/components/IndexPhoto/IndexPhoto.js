import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "./IndexPhoto.module.scss";
import { photosSelector } from "../../../../app/selectors";

import Button from "../../../../components/Button";
import PhotoGrid from "../../../../components/PhotoGrid";
import { useEffect } from "react";


const cx = classNames.bind(styles);

function IndexPhoto() {
    const photos = useSelector(photosSelector);

    useEffect(() => console.log(photos))

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