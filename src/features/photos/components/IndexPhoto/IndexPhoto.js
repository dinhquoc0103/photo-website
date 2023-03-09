import { unwrapResult } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from 'react-loading';
import classNames from "classnames/bind";

import { useEffect, useState } from "react";
import styles from "./IndexPhoto.module.scss";
import { selectAllPhotos } from "../../../../app/selectors";
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
                deleting && <div className={cx("photo-loading")}>
                    <ReactLoading type="spokes" color="red" height='6%' width='6%' />
                </div>
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
                    <div className={cx("photo-loading")}>
                        <ReactLoading type="spokes" color="red" height='6%' width='6%' />
                    </div>
            }
        </div>
    );
}


export default IndexPhoto;