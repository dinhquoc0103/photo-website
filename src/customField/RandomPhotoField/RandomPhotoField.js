import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./RandomPhotoField.module.scss";

import RandomPhoto from "../../components/RandomPhoto/RandomPhoto";

const cx = classNames.bind(styles);

function RandomPhotoField({
    field,
    form,

    label = '',
}) {
    const { name, value, onChange, onBlur } = field;

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