import Select from "react-select";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./SelectField.module.scss";

const cx = classNames.bind(styles);

function SelectField({
    field,
    form,

    label = '',
    placeholder = '',
    disabled = false,
    options = [],
}) {

    const { name, value } = field;

    const selectName = options.find(option => option.value === value);

    const handleSelectOntionChanged = (selectOption) => {
        form.setFieldValue(name, selectOption.value);
    }

    return (
        <div className={cx("form-group")}>
            {label && <label htmlFor={name}>{label}</label>}

            <Select
                placeholder={placeholder}
                disabled={disabled}
                options={options}
                id={name}

                {...field}
                value={selectName}
                onChange={handleSelectOntionChanged}
            />
        </div>
    );
}

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
}

export default SelectField;