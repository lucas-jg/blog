import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "lib/lottie/src/hyperloading.json";

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
			<Lottie
				options={defaultOptions}
				height={400}
				width={400}
				isStopped={this.state.isStopped}
				isPaused={this.state.isPaused}
			/>
		);
	}
}

export default LottieControl;
