import classNames from "classnames/bind";

import styles from "./Header.module.scss";

import Button from "../Button";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header>
            <div className={cx("container", "header")} >
                <div className={cx("header__logo")}>
                    Q Photos
                </div>
                <div className={cx("header__signin")}>
                    <Button
                        className={["btn"]}
                    >Sign In</Button>
                </div>
            </div>
        </header >
    );
}

export default Header;