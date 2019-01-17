import React, { Component } from "react";

import styles from "./MarkdownRender.scss";
import classNames from "classnames/bind";

import marked from "marked";

// Prism 관련
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
// 지원할 코드 형식
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";

const cx = classNames.bind(styles);

class MarkdownRender extends Component {
	state = {
		html: ""
	};

	renderMarkdown = () => {
		const { markdown } = this.props;
		// 마크다운이 없다면 공백
		if (!markdown) {
			this.setState({ html: "" });
			return;
		}

		this.setState({
			html: marked(markdown, {
				breaks: true, // 일반 엔터로 새 줄 입력
				sanitize: true // 마크다운 내부 html 무시
			})
		});
	};

	constructor(props) {
		super(props);
		const { markdown } = props;
		// 서버사이드 렌더링에서도 마크다운 처리가 되도록 constructor 쪽에서도 구현

		this.state = {
			html: markdown ? marked(props.markdown, { breaks: true, sanitize: true }) : ""
		};
	}

	componentDidUpdate = (prevProps, prevState) => {
		// markdown 값이 변경되면 renderMarkdown을 호출
		if (prevProps.markdown !== this.props.markdown) {
			this.renderMarkdown();
		}

		if (prevProps.html !== this.state.html) {
			Prism.highlightAll();
		}
	};

	componentDidMount = () => {
		Prism.highlightAll();
	};

	render() {
		const { html } = this.state;

		/**
		 * React에서 html을 렌더링하려면 객체를 만들어 내부에 __html 값을 설정해야함
		 * 그리고 dangerouslySetInnerHTML 값에 해당 객체를 넣어주면됨
		 */
		const markup = {
			__html: html
		};

		return <div className={cx("markdown-render")} dangerouslySetInnerHTML={markup} />;
	}
}

export default MarkdownRender;
