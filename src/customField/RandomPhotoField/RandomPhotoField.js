import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./RandomPhotoField.module.scss";

import RandomPhoto from "../../components/RandomPhoto/RandomPhoto";
import FormFeedBack from "../../components/FormFeedBack";


const cx = classNames.bind(styles);

function RandomPhotoField({
    field,
    form,

    label = '',
}) {

    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;

    const handleImageUrlChange = (imageUrl) => {
        form.setFieldValue(name, imageUrl);
    }

    return (
        <div className={cx("form-group")}>
            {label && <label htmlFor={name}>{label}</label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />

            <ErrorMessage component={FormFeedBack} name={name} />
        </div>
    );
}

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

export default RandomPhotoField;