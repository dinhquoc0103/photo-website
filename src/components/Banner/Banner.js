import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function Banner({
    title = "Your amazing photos",
    backgroundImg
}) {
    return (
        <section>
            <div className={cx("banner")} style={{ backgroundImage: `url(${backgroundImg})` }}>
                <h1 className={cx("title")} > {title}</h1>
            </div>
        </section >
    );
}

Banner.propTypes = {
    title: PropTypes.string,
    backgroundImg: PropTypes.string,
}

export default Banner;