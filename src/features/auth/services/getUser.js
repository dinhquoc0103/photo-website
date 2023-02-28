import httpRequest from "../../../api/httpRequest";
import { auth } from "../../../firebase";

export const getUser = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const currentUser = auth.currentUser;

            resolve({
                id: currentUser.uid,
                name: currentUser.displayName,
                email: currentUser.email,
                photoUrl: currentUser.photoURL
            });
        }, 2000);
    });
}