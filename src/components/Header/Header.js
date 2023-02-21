import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

import Button from "../Button";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header>
            <div className={cx("container", "header")} >
                <div className={cx("header__logo")}>
                    <Link to="/photos">
                        Q Photos
                    </Link>
                </div>
                <div className={cx("header__signin")}>
                    <Link to="/signin">
                        <Button
                            className={["btn"]}
                        >Sign In</Button>
                    </Link>
                </div>
            </div>
        </header >
    );
}

export default Header;