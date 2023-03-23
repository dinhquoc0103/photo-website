import Select from "react-select";
import classNames from "classnames/bind";

import { PHOTO_CATEGORY_OPTIONS } from "../../constants/global";
import styles from "./Filters.module.scss";
import { categoryChanged } from "../../features/filters/filtersSlice";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

function Filters() {
    const dispatch = useDispatch();

    const handleFilterCategoryChanged = (selectOption) => {
        const action = categoryChanged(selectOption.value);
        dispatch(action);
    }

    return (
        <div className={cx("filter")}>
            <Select
                placeholder="Filter by category"
                options={PHOTO_CATEGORY_OPTIONS}
                onChange={handleFilterCategoryChanged}
            />
        </div>
    );
}

export default Filters;