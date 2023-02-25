import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { updatePhoto } from "../../photosSlice";

import PhotoForm from "../PhotoForm";

function EditPhotoForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const photo = useSelector(state => {
        const photos = state.photos;
        return photos.find(photo => photo.id === +id);
    })

    const handleEditPhoto = (photo) => {
        const action = updatePhoto(photo);
        dispatch(action);

        navigate("/photos");
    }

    return (
        <>
            <PhotoForm isAddPhoto={false} photo={photo} onSubmit={handleEditPhoto} />
        </>
    );
}

export default EditPhotoForm;