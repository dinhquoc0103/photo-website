import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./PhotoCard.module.scss";

import Button from "../../components/Button";

const cx = classNames.bind(styles);

function PhotoCard({
    photo,
    onDeletePhotoClick = null
}) {

    const handleRemoveClick = () => {
        if (onDeletePhotoClick)
            onDeletePhotoClick(photo)
    }

    return (
        <div className={cx("photo-item")}>
            <img src={photo.photo} alt="" />

            <div className={cx("overlay")}>
                <div className={cx("overlay__title")}>
                    {photo.title}
                </div>

                <div className={cx("overlay__actions")}>

                    <div className={cx("overlay__actions__edit")} >
                        <Link to={`/photos/${photo.id}`}>
                            <Button className={["btn"]}>
                                Edit
                            </Button>
                        </Link>
                    </div>

                    <div className={cx("overlay__actions__delete")}>
                        <Link to="">
                            <Button className={["btn"]} onClick={handleRemoveClick}>
                                Delete
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onDeletePhotoClick: PropTypes.func,
}

export default PhotoCard;