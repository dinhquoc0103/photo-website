
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPhoto } from "../../photosSlice";
import PhotoForm from "../PhotoForm";

function AddPhotoForm() {
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleAddPhoto = (photo) => {
        const action = addPhoto(photo);
        dispatch(action);

        navigate("/photos");
    }

    return (
        <>
            <PhotoForm isAddPhoto onSubmit={handleAddPhoto} />
        </>
    );
}

export default AddPhotoForm;