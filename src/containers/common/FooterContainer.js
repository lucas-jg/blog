import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";
import Footer from "components/common/Footer";

class FooterContainer extends Component {
    handleLoginClick = async () => {
        const { BaseActions } = this.props;
        BaseActions.showModal("login");
    };

    render() {
        const { handleLoginClick } = this;
        return <Footer onLoginClick={handleLoginClick} />;
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(FooterContainer);
