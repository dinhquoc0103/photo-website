import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelector } from "../app/selectors";

function ProtectedRoute({ children }) {
    const authUser = useSelector(authSelector);

    return (
        authUser.isLogged
            ? children
            : <Navigate to="/signin" replace={true} />
    );
}

export default ProtectedRoute;