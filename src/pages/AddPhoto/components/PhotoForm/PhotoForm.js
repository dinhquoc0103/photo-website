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

function PhotoForm() {
    const initialValues = {
        title: '',
        categoryId: null,
        photo: ''
    }

    const handleSubmitFormPhoto = (values) => {
        console.log(values);
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
                                            Add Photo to album
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

export default PhotoForm;