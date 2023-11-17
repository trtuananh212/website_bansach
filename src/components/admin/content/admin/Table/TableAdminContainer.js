
import { connect } from 'react-redux';

// components
import TableAdmin from './TableAdmin';

// action
import * as AdminAction from 'src/action/adminAction';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAdmin: (id) => dispatch(AdminAction.callDeleteAdminAction(id))
  };
};

const TableAdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableAdmin);

export default TableAdminContainer;
