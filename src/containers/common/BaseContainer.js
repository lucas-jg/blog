import React, { Component } from "react";
import LoginModalContainer from "containers/modal/LoginModalContainer";
import { connect } from "react-redux";
import * as baseActions from "store/modules/base";
import { bindActionCreators } from "redux";

class BaseContainer extends Component {
	initialize = async () => {
		// 로그인 상태 확인(추후 작성)
		const { BaseActions } = this.props;

		if (localStorage.logged === "true") {
			BaseActions.tempLogin();
		}

		BaseActions.checkLogin();
	};

	componentDidMount = () => {
		this.initialize();
	};

	render() {
		return (
			<div>
				<LoginModalContainer />
			</div>
		);
	}
}

export default connect(
	null,
	dispatch => ({
		BaseActions: bindActionCreators(baseActions, dispatch)
	})
)(BaseContainer);
