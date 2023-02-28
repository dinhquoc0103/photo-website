import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import classNames from "classnames/bind";

import { auth } from "../../firebase";
import { deleteAuth } from "../../features/auth/authSlice";
import { authSelector } from "../../app/selectors";

import styles from "./Header.module.scss";

import Button from "../Button";


const cx = classNames.bind(styles);

function Header() {
    const authUser = useSelector(authSelector);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);

        const action = deleteAuth({
            isLogged: false,
            currentUser: {}
        });
        dispatch(action);

        navigate("/photos");
    }

    return (
        <header>
            <div className={cx("container", "header")} >
                <div className={cx("header__logo")}>
                    <Link to="/photos">
                        Q Photos
                    </Link>
                </div>
                {
                    authUser.isLogged
                        ?
                        <div className={cx("header__logged")}>
                            <img src={authUser.currentUser.photoUrl} alt="" />

                            <div>
                                <p className={cx("username")}>{authUser.currentUser.name}</p>
                                <Button
                                    className={["btn"]}
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </Button>
                            </div>
                        </div>
                        :
                        <div className={cx("header__signin")}>
                            <Link to="/signin">
                                <Button
                                    className={["btn"]}
                                >
                                    Sign In
                                </Button>
                            </Link>
                        </div>

                }
            </div>
        </header >
    );
}

export default Header;