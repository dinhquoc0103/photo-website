import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "./IndexPhoto.module.scss";
import { photosSelector } from "../../../../app/selectors";
import { deletePhoto } from "../../photosSlice";

import Button from "../../../../components/Button";
import PhotoGrid from "../../../../components/PhotoGrid";


const cx = classNames.bind(styles);

function IndexPhoto() {
    const dispatch = useDispatch();
    const photos = useSelector(photosSelector);

    const handleDeletePhoto = (photo) => {
        const action = deletePhoto(photo);
        dispatch(action);
    }

    return (
        <div className={cx("photo")}>
            <div className={cx("photo-adding")}>
                <Link to="/photos/add">
                    <Button className={["btn"]}>
                        Add New Photo
                    </Button>
                </Link>
            </div>

            <PhotoGrid photos={photos} onDeletePhotoClick={handleDeletePhoto} />
        </div>
    );
}


export default IndexPhoto;