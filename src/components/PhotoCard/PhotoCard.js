import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./PhotoCard.module.scss";

import Button from "../../components/Button";

const cx = classNames.bind(styles);

function PhotoCard({ photo }) {
    return (
        <div className={cx("photo-item")}>
            <img src="https://picsum.photos/id/110/300/300" alt="" />

            <div className={cx("overlay")}>
                <div className={cx("overlay__title")}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>

                <div className={cx("overlay__actions")}>

                    <div className={cx("overlay__actions__edit")} >
                        <Link to="/photos/18">
                            <Button className={["btn"]}>
                                Edit
                            </Button>
                        </Link>
                    </div>

                    <div className={cx("overlay__actions__delete")}>
                        <Link to="">
                            <Button className={["btn"]}>
                                Delete
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

PhotoCard.propTypes = {
    photo: PropTypes.object
}

export default PhotoCard;