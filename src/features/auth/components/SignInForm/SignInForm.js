
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../../../../firebase";

import styles from "./SignInForm.module.scss";

const cx = classNames.bind(styles);

function SignInForm() {
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);

            if (result.user) {
                navigate("/photos")
            }

        } catch (error) {

        }
    }

    return (
        <>
            <h1>Welcome to Photo Website</h1>
            <div className={cx("login")}>
                <GoogleLoginButton onClick={handleSignIn} />
            </div>
        </>
    );
}

export default SignInForm;