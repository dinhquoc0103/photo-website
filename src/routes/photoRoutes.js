import IndexPhoto from "../features/photos/components/IndexPhoto";
import AddPhotoForm from "../features/photos/components/AddPhotoForm";
import EditPhotoForm from "../features/photos/components/EditPhotoForm";

export const publicPhotoRoutes = [
    { path: "index", component: IndexPhoto },
];

export const privatePhotoRoutes = [
    { path: "add", component: AddPhotoForm },
    { path: "edit/:id", component: EditPhotoForm },
];