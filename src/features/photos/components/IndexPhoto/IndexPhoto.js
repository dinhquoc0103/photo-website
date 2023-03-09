import { useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from 'react-loading';
import classNames from "classnames/bind";

import styles from "./IndexPhoto.module.scss";
import { authSelector, selectAllPhotos } from "../../../../app/selectors";
import { deletePhoto, fetchPhotos } from "../../photosSlice";
import { toast } from "react-toastify";

import Button from "../../../../components/Button";
import PhotoGrid from "../../../../components/PhotoGrid";


const cx = classNames.bind(styles);

function IndexPhoto() {
    const [deleting, setDeleting] = useState(false);

    const dispatch = useDispatch();
    const photos = useSelector(selectAllPhotos);
    const photoStatus = useSelector(state => state.photos.status);
    const authUser = useSelector(authSelector);

    useEffect(() => {
        if (photoStatus === "idle") {
            dispatch(fetchPhotos());
        }
    }, [photoStatus, dispatch]);

    const handleDeletePhoto = async (photo) => {
        setDeleting(true);

        try {
            const resultAction = await dispatch(deletePhoto(photo));
            unwrapResult(resultAction);

            setDeleting(false);

            toast.success('🦄 Delete a successful photo!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.error("Failed to delete photo: ", error.message);
        }
    }

    return (
        <div className={cx("photo")}>
            {
                deleting && <div className={cx("loading")}>
                    <ReactLoading type="spokes" color="#BABABA" height='4%' width='4%' />
                </div>
            }

            {
                !authUser.isLogged && <p className={cx("photo-signin-notice")}>Sign in to create photos, as well as edit or delete...</p>
            }

            <div className={cx("photo-adding")}>
                <Link to="/photos/add">
                    <Button className={["btn"]}>
                        Add New Photo
                    </Button>
                </Link>
            </div>

            {
                photoStatus === "succeeded"
                    ?
                    <PhotoGrid photos={photos} onDeletePhotoClick={handleDeletePhoto} />
                    :
                    <div className={cx("loading")}>
                        <ReactLoading type="spokes" color="#BABABA" height='4%' width='4%' />
                    </div>
            }
        </div>
    );
}


export default IndexPhoto;