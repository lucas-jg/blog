import React, { Component } from "react";
import LoginModal from "components/modal/LoginModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";

class LoginModalContainer extends Component {
    handleLogin = () => {};

    handleCancel = () => {
        const { BaseActions } = this.props;
        BaseActions.hideModal("login");
    };

    handleChange = e => {};

    handleKeyPress = e => {};

    render() {
        const { handleCancel, handleChange, handleKeyPress, handleLogin } = this;
        const { visible } = this.props;
        return (
            <LoginModal
                onLogin={handleLogin}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                onCancel={handleCancel}
                visible={visible}
            />
        );
    }
}

export default connect(
    state => ({
        visible: state.base.getIn(["modal", "login"])
    }),
    dispatch => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(LoginModalContainer);
