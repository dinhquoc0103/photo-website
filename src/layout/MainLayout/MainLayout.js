import { Suspense } from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import Banner from "../../components/Banner";

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Banner />
                <div className="container">
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