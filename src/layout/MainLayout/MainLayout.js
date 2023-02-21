import { Suspense } from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <div className="content">
                    {children}
                </div>
            </Suspense>
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;