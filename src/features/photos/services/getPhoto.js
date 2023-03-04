import httpRequest from "../../../api/httpRequest";

export const getPhoto = (photoId) => {
    const path = `/photos/${photoId}`;
    return httpRequest.get(path);
}