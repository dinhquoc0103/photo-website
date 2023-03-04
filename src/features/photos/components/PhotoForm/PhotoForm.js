import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import classNames from "classnames/bind";

import styles from "./PhotoForm.module.scss";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";

import Button from "../../../../components/Button";
import InputField from "../../../../customField/InputField/InputField";
import SelectField from "../../../../customField/SelectField/SelectField";
import RandomPhotoField from "../../../../customField/RandomPhotoField/RandomPhotoField";

const cx = classNames.bind(styles);

function PhotoForm({
    isAddPhoto,
    photo,
    onSubmit = null
}) {

    const initialValues = isAddPhoto
        ? {
            title: '',
            categoryId: null,
            photo: ''
        }
        :
        photo;

    const handleSubmitFormPhoto = (values) => {
        onSubmit(values);
    }

    const photoFormSchema = Yup.object().shape({
        title: Yup.string()
            .min(5, "Title is too short!")
            .required("Title is required!"),
        categoryId: Yup.string()
            .required("Category is required!"),
        photo: Yup.string()
            .required("You have to randomly choose an image!")
    });

    return (

        < div className={cx("container")} >

            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={photoFormSchema}
                onSubmit={handleSubmitFormPhoto}
            >
                {
                    formikProps => {

                        const { values, errors, touched } = formikProps;

                        return (
                            <div className={cx("form")}>
                                <Form>
                                    <FastField
                                        name="title"
                                        component={InputField}

                                        label="Title"
                                        placeholder="Eg: A new photo..."
                                    />

                                    <FastField
                                        name="categoryId"
                                        component={SelectField}

                                        label="Category"
                                        placeholder="Select your category image..."
                                        options={PHOTO_CATEGORY_OPTIONS}
                                    />

                                    <FastField
                                        name="photo"
                                        component={RandomPhotoField}

                                        label="Photo"
                                    />

                                    <div className={cx("form-group")}>
                                        <Button
                                            type="submit"
                                            className={["btn"]}
                                        >
                                            {isAddPhoto ? "Add Photo to album" : "Edit your photo"}
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        );
                    }
                }
            </Formik>

        </div >
    );
}

PhotoForm.propTypes = {
    isAddPhoto: PropTypes.bool.isRequired,
    photo: PropTypes.object,
    onSubmit: PropTypes.func
}

export default PhotoForm;