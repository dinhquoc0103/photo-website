import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./PhotoGrid.module.scss";

import PhotoCard from "../../components/PhotoCard";

const cx = classNames.bind(styles);

function PhotoGrid({ photos, onDeletePhotoClick }) {

    return (
        <div className={cx("photo-grid")}>
            {
                photos.map(photo => (
                    <PhotoCard
                        key={photo.id}
                        photo={photo}
                        onDeletePhotoClick={onDeletePhotoClick}
                    />
                ))
            }
        </div>
    );
}

PhotoGrid.propTypes = {
    photos: PropTypes.array.isRequired,
    photos: PropTypes.func
}

export default PhotoGrid;