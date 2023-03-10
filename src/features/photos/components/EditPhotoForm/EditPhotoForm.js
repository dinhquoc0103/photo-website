import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReactLoading from 'react-loading';
import { toast } from "react-toastify";
import { useTitle } from "../../../../hooks";

import { updatePhoto } from "../../photosSlice";
import photoService from "../../services";

import PhotoForm from "../PhotoForm";

function EditPhotoForm() {
    const [photo, setPhoto] = useState();

    const dispatch = useDispatch();

    const { id } = useParams();
    const navigate = useNavigate();

    useTitle("Photos");

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await photoService.getPhoto(id);
                if (response.data.id) {
                    setPhoto(response.data);
                }
                else {
                    navigate("/not-found");
                }
            }
            catch (error) {
                console.error("Failed to get photo: ", error.message);
            }
        }
        fetchPhoto();
    }, [id]);

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
                autoClose: 1000,
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
            {
                photo
                    ?
                    <PhotoForm isAddPhoto={false} photo={photo} onSubmit={handleEditPhoto} />
                    :
                    <div className="loading">
                        <ReactLoading type="spokes" color="#BABABA" height='4%' width='4%' />
                    </div>
            }
        </>
    );
}

export default EditPhotoForm;