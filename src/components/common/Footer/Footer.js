import React from "react";
import styles from "./Footer.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Footer = ({ onLoginClick, logged }) => (
	<footer className={cx("footer")}>
		<Link to="/" className={cx("brand")}>
			YS Blog
		</Link>
		<div className={cx("admin-login")} onClick={onLoginClick}>
			{logged ? "로그아웃" : "관리자 로그인"}
		</div>
	</footer>
);

export default Footer;
