import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/**
 * 전달받은 className, onClick 등 값들이 rest 안에 들어 있습니다.
 * JSX에서 ...을 사용하면 내부에 있는 값들을 props로 넘겨 줍니다.
 */
const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

const Button = ({ children, to, onClick, disabled, theme = "default" }) => {
  // 버튼을 div, Link 동시에 하나의 컴포넌트로 관리하기 위함
  const Element = to && !disabled ? Link : Div;
  return (
    <Element
      to={to}
      className={cx("button", theme, { disabled })}
      onClick={disabled ? () => null : onClick}
    >
      {children}
    </Element>
  );
};

export default Button;
