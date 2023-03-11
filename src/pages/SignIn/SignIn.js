import classNames from "classnames/bind";
import { useTitle } from "../../hooks";

import SignInForm from "../../features/auth/components/SignInForm/SignInForm";

import styles from "./SignIn.module.scss";

const cx = classNames.bind(styles);

function SignIn() {
    useTitle("Sign In");

    return (
        <div className="container">
            <div className={cx("sign-in")}>
                <SignInForm />
            </div>
        </div>
    );
}

export default SignIn;