import classNames from "classnames/bind";

import styles from "./AddPhoto.module.scss";
import Images from "../../constants/images";

import Banner from "../../components/Banner";

const cx = classNames.bind(styles);

function AddPhoto() {
    return (
        <>
            <Banner
                title="Edit your photos. Let's go!"
                backgroundImg={Images.BlueBackground}
            />

            <div className={cx("container")}>
                <div className={cx("edit")}>
                    <h1>ADD PHOTO</h1>

                </div>
            </div>
        </>
    );
}

export default AddPhoto;