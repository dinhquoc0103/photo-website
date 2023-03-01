
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewPhoto } from "../../photosSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { authSelector } from "../../../../app/selectors";

import PhotoForm from "../PhotoForm";

function AddPhotoForm() {
    const authUser = useSelector(authSelector);

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleAddPhoto = async (photo) => {
        let flag = false;

        try {
            const resultAction = await dispatch(addNewPhoto({
                ...photo,
                userId: authUser.currentUser.id
            }));
            unwrapResult(resultAction);

            flag = !flag;

            toast.success('🦄 Add successful photo!', {
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
            console.error("Failed to add photo: ", error.message);
        }

        if (flag) {
            navigate("/photos");
        }
    }

    return (
        <>
            <PhotoForm isAddPhoto onSubmit={handleAddPhoto} />
        </>
    );
}

export default AddPhotoForm;