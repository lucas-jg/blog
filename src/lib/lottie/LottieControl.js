import React, { Component } from "react";
import styles from "./LottieControl.scss";
import classNames from "classnames/bind";
import Lottie from "react-lottie";
import animationData from "lib/lottie/src/hyperloading.json";

const cx = classNames.bind(styles);

class LottieControl extends Component {
	constructor(props) {
		super(props);
		this.state = { isStopped: false, isPaused: false };
	}

	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: animationData,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice"
			}
		};

		return (
			<div className={cx("loader")}>
				<Lottie
					options={defaultOptions}
					height={400}
					width={400}
					isStopped={this.state.isStopped}
					isPaused={this.state.isPaused}
				/>
			</div>
		);
	}
}

export default LottieControl;
