import Select from "react-select";
import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";


import styles from "./AddPhoto.module.scss";
import Images from "../../constants/images";
import { PHOTO_CATEGORY_OPTIONS } from "../../constants/global";

import Banner from "../../components/Banner";
import Button from "../../components/Button";
import InputField from "../../customField/InputField/InputField";
import PhotoForm from "./components/PhotoForm/PhotoForm";

const cx = classNames.bind(styles);

function AddPhoto() {

    return (
        <>
            <Banner
                title="Pick your amazing photo. Let's go!"
                backgroundImg={Images.BlueBackground}
            />
            <PhotoForm />
        </>
    );
}

export default AddPhoto;