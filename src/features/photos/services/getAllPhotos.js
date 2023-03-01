import httpRequest from "../../../api/httpRequest";

export const getAllPhotos = () => {

    return httpRequest.get("/photos");
}
