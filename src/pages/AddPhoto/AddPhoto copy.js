import Select from "react-select";
import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./AddPhoto.module.scss";
import Images from "../../constants/images";
import { PHOTO_CATEGORY_OPTIONS } from "../../constants/global";

import Banner from "../../components/Banner";
import Button from "../../components/Button";

const cx = classNames.bind(styles);

function AddPhoto() {
    return (
        <>
            <Banner
                title="Pick your amazing photo. Let's go!"
                backgroundImg={Images.BlueBackground}
            />

            <div className={cx("container")}>
                <div className={cx("edit")}>
                    <div className={cx("form-group")}>
                        <label htmlFor="title">Title</label>
                        <input onChange={handleChange} type="text" name="title" placeholder="Eg: A new photo..." />
                    </div>

                    <div className={cx("form-group")}>
                        <label htmlFor="name">name</label>
                        <input onChange={handleChange} type="text" name="name" placeholder="Eg: A new photo..." />
                    </div>

                    <div className={cx("form-group")}>
                        <label htmlFor="categoryId">Category</label>
                        <Select
                            autoFocus
                            options={PHOTO_CATEGORY_OPTIONS}
                            placeholder="Select your category image..."
                        />
                    </div>

                    <div className={cx("form-group")}>
                        <label htmlFor="photo">Photo</label>

                        <div className={cx("ramdom-photo")}>
                            <div className={cx("ramdom-photo__btn")}>
                                <Button className={["btn"]}>
                                    Random a photo...
                                </Button>
                            </div>

                            <div className={cx("random-photo__img")}>

                            </div>
                        </div>
                    </div>

                    <div className={cx("form-group")}>
                        <Button className={["btn"]}>Add Photo to album</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddPhoto;