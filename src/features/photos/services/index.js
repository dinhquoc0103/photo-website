import { getAllPhotos } from "./getAllPhotos";
import { addNewPhoto } from "./addNewPhoto";
import { updatePhoto } from "./updatePhoto";
import { deletePhoto } from "./deletePhoto";
import { getPhoto } from "./getPhoto";

const photoService = {
    getAllPhotos,
    addNewPhoto,
    updatePhoto,
    deletePhoto,
    getPhoto
}

export default photoService;