import { getAllPhotos } from "./getAllPhotos";
import { addNewPhoto } from "./addNewPhoto";
import { updatePhoto } from "./updatePhoto";
import { deletePhoto } from "./deletePhoto";

const photoService = {
    getAllPhotos,
    addNewPhoto,
    updatePhoto,
    deletePhoto
}

export default photoService;