import httpRequest from "../../../api/httpRequest";

export const deletePhoto = (photoId) => {
    const path = `photos/${photoId}`;
    return httpRequest.delete(path);
}
