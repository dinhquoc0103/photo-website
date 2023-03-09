import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import ReactLoading from 'react-loading';
import classNames from "classnames/bind";

import styles from "./PhotoForm.module.scss";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";

import Button from "../../../../components/Button";
import InputField from "../../../../customField/InputField/InputField";
import SelectField from "../../../../customField/SelectField/SelectField";
import RandomPhotoField from "../../../../customField/RandomPhotoField/RandomPhotoField";
import { useState } from "react";

const cx = classNames.bind(styles);

function PhotoForm({
    isAddPhoto,
    photo,
    onSubmit = null
}) {
    const [submitting, setSubmitting] = useState(false);

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
        <>
            {
                submitting && <div className={cx("loading")}>
                    <ReactLoading type="spokes" color="#BABABA" height='4%' width='4%' />
                </div>
            }

            < div className={cx("container")} >
                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    validationSchema={photoFormSchema}
                    onSubmit={handleSubmitFormPhoto}
                >
                    {
                        formikProps => {

                            const { values, errors, touched, isSubmitting } = formikProps;
                            setSubmitting(isSubmitting);
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
                                                disabled={isSubmitting}
                                            >
                                                {
                                                    isAddPhoto
                                                        ?
                                                        isSubmitting ? "Adding..." : "Add Photo to album"
                                                        :
                                                        isSubmitting ? "Updating..." : "Update your photo"
                                                }
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            );
                        }
                    }
                </Formik>

            </div >
        </>
    );
}

PhotoForm.propTypes = {
    isAddPhoto: PropTypes.bool.isRequired,
    photo: PropTypes.object,
    onSubmit: PropTypes.func
}

export default PhotoForm;