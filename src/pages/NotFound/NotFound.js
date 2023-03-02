import classNames from "classnames/bind";

import styles from "./NotFound.module.scss";
import PageNotFound from "../../assets/images/page-not-found.avif"

const cx = classNames.bind(styles);

function NotFound() {

    return (
        <>
            <div className="container">
                <div className={cx("page-not-found")}>
                    <img src={PageNotFound} alt="" />
                </div>
            </div>
        </>
    );
}

export default NotFound;