

import React from 'react';
import {getLoginAdmin} from "src/api/admin/login";
// import PropTypes from 'prop-types';

async function checkLoginAdmin(Component) {
    return <Component />;
}

checkLoginAdmin.propTypes = {};

checkLoginAdmin.defaultProps = {};

export default checkLoginAdmin;
