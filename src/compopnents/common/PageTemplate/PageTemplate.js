import React from "react";
import styles from "./PageTemplate.scss";
import classNames from "classnames/bind";

const cx = classNames.binde(styles);

const PageTemplate = () => {
  <div className={cx("page-template")}>PageTemplate</div>;
};

export default PageTemplate;
