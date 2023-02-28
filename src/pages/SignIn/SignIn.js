import classNames from "classnames/bind";

import SignInForm from "../../features/auth/components/SignInForm/SignInForm";

import styles from "./SignIn.module.scss";

const cx = classNames.bind(styles);

function SignIn() {
    return (
        <div className="container">
            <div className={cx("sign-in")}>
                <SignInForm />
            </div>
        </div>
    );
}

export default SignIn;