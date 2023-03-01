import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { updatePhoto } from "../../photosSlice";

import PhotoForm from "../PhotoForm";

function EditPhotoForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const photo = useSelector(state => {
        const photos = state.photos.photos;
        return photos.find(photo => photo.id === +id);
    });

    const handleEditPhoto = async (editedPhoto) => {
        let flag = false;

        try {
            const resultAction = await dispatch(updatePhoto({
                photoId: photo.id,
                editedPhoto: editedPhoto
            }))
            unwrapResult(resultAction);

            flag = !flag;

            toast.success('🦄 Successful photo update!', {
                position: "top-center",
                autoClose: 2600,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        catch (error) {
            console.error("Failed to update photo: ", error.message);
        }

        if (flag) {
            navigate("/photos");
        }
    }

    return (
        <>
            <PhotoForm isAddPhoto={false} photo={photo} onSubmit={handleEditPhoto} />
        </>
    );
}

export default EditPhotoForm;