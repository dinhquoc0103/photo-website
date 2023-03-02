
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../authSlice";
import { GoogleLoginButton } from "react-social-login-buttons";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";

import { auth, googleProvider } from "../../../../firebase";
import store from "../../../../app/store";

import styles from "./SignInForm.module.scss";


const cx = classNames.bind(styles);

function SignInForm() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    store.subscribe(() => {
        localStorage.setItem(
            "AUTH_USER",
            JSON.stringify(store.getState().auth)
        )
    });

    const handleSignIn = async () => {
        let flag = false;

        try {
            await signInWithPopup(auth, googleProvider);

            dispatch(fetchUser()).unwrap();

            flag = !flag;

            toast.success('🦄 Logged in successfully!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        catch (error) {
            console.error("Failed to logged in: ", error.message);
        }

        if (flag) {
            navigate("/photos")
        }
    }

    return (
        <>
            <h1>Welcome to Photo Website</h1>
            <div className={cx("login")}>
                <GoogleLoginButton onClick={handleSignIn()} />
            </div>
        </>
    );
}

export default SignInForm;