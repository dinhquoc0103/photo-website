import classNames from "classnames/bind";

import styles from "./EditPhoto.module.scss";
import Images from "../../constants/images";

import Banner from "../../components/Banner";

const cx = classNames.bind(styles);

function EditPhoto() {
    return (
        <>
            <Banner
                title="Edit your photos. Let's go!"
                backgroundImg={Images.PinkBackground}
            />

            <div className={cx("container")}>
                <div className={cx("edit")}>
                    <h1>EDIT PHOTO</h1>

                </div>
            </div>
        </>
    );
}

export default EditPhoto;