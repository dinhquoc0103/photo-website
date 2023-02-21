import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./PhotoGrid.module.scss";

import PhotoCard from "../../components/PhotoCard";

const cx = classNames.bind(styles);

function PhotoGrid() {
    return (
        <div className={cx("photo-grid")}>
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
        </div>
    );
}

export default PhotoGrid;