import httpRequest from "../../../api/httpRequest";

export const addNewPhoto = (newPhoto) => {
    const path = "photos";
    return httpRequest.post(path, newPhoto)
}