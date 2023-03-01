import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Banner.module.scss";
import { useEffect, useState } from "react";
import Images from "../../constants/images";

const cx = classNames.bind(styles);

function Banner({ router }) {
    const [bannerTitle, setBannerTitle] = useState("");
    const [bannerBg, setBannerBg] = useState("");

    const { location } = router;

    useEffect(() => {
        let title, backgroundImg;
        if (location.pathname !== "/photos") {
            const isAddPhoto = location.pathname === "/photos/add";
            title = isAddPhoto ? "Pick your a new photo..." : "Update your amazing photo...";
            backgroundImg = isAddPhoto ? Images.ColorfulBackground : Images.WhiteBackground;
        }
        else {
            title = "Your amazing photos...";
            backgroundImg = Images.PinkBackground;
        }
        setBannerTitle(title);
        setBannerBg(backgroundImg);
    });

    return (
        <section>
            <div className={cx("banner")} style={{ backgroundImage: `url(${bannerBg})` }}>
                <h1 className={cx("title")} > {bannerTitle}</h1>
            </div>
        </section >
    );
}

Banner.propTypes = {
    title: PropTypes.string,
    backgroundImg: PropTypes.string,
}

export default Banner;