import { FastField, Form, Formik } from "formik";
import Select from "react-select";
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
        categoryId: null
    }

    const handleSubmitFormPhoto = (values) => {
        console.log(values);
    }

    return (

        < div className={cx("container")} >

            <Formik
                initialValues={initialValues}
                onSubmit={values => console.log("Photo: ", values)}
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