

import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

// components
import HeaderAdmin from "../../header/index.jsx";
// import FooterAdmin from "../../footer/index.jsx";
import ContentAdmin from "../../content/Content.View.jsx";

// const
const { Header, Content } = Layout;

function CatalogView(props) {
    const { titleHeader } = props;

    return (
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <HeaderAdmin title={titleHeader} />
            </Header>
            <Content style={{ margin: "0 16px" }}>
                <ContentAdmin
                    title={titleHeader}
                />
            </Content>
        </Layout>
    );
}

CatalogView.propTypes = {
    titleHeader: PropTypes.string,
    listSlider: PropTypes.object,
    getList: PropTypes.func,
};

CatalogView.defaultProps = {
    titleHeader: 'Error',
    listSlider: {},
    getList: () => null,
};

export default React.memo(CatalogView);

