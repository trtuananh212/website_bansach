

import React, {useEffect} from "react";
import {Layout} from "antd";
import PropTypes from "prop-types";

// components
import HeaderAdmin from "../../header/index.jsx";
// import FooterAdmin from "../../footer/index.jsx";
import ContentAdmin from "../../content/Content.View.jsx";

// const
const {Header, Content} = Layout;

function AdminView(props) {
    const {titleHeader, getList, listAdmin} = props;
    useEffect(() => {
        getList();
    }, []);

    return (
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding: 0}}>
                <HeaderAdmin title={titleHeader}/>
            </Header>
            <Content style={{margin: "0 16px"}}>
                <ContentAdmin
                    title={titleHeader}
                    list={listAdmin}
                />
            </Content>
        </Layout>
    );
}

AdminView.propTypes = {
    titleHeader: PropTypes.string,
    listSlider: PropTypes.object,
    getList: PropTypes.func,
};

AdminView.defaultProps = {
    titleHeader: 'Error',
    listSlider: {},
    getList: () => null,
};

export default AdminView;

