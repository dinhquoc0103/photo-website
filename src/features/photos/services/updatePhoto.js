import httpRequest from "../../../api/httpRequest";

export const updatePhoto = (photoId, newPhoto) => {
    const path = `photos/${photoId}`;
    return httpRequest.put(path, newPhoto);
}