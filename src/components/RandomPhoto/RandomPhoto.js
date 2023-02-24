import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./RandomPhoto.module.scss";

import Button from "../Button";

const cx = classNames.bind(styles);

const getRandomImageUrl = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/id/${randomId}/300/300`;
}

function RandomPhoto({
    name = '',
    imageUrl = '',
    onImageUrlChange = null,
    onRandomButtonBlur = null
}) {

    const handleRandomPhotoClick = () => {
        if (onImageUrlChange) {
            const imageUrl = getRandomImageUrl();
            onImageUrlChange(imageUrl);
        }
    }

    return (
        <div className={cx("ramdom-photo")}>
            <div className={cx("ramdom-photo__btn")}>
                <Button
                    className={["btn"]}
                    onClick={handleRandomPhotoClick}
                    onBlur={onRandomButtonBlur}
                >
                    Random a photo...
                </Button>
            </div>

            <div className={cx("random-photo__img")}>
                {imageUrl && <img src={imageUrl} alt={name} />}
            </div>
        </div>
    );
}

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
}

export default RandomPhoto;