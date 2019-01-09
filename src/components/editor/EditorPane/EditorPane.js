import React, { Component } from "react";

import styles from "./EditorPane.scss";
import classNames from "classnames/bind";

import CodeMirror from "codemirror";

import "codemirror/mode/markdown/markdown"; //마크다운 문법 색상
//마크다운 내부에서 입력되는 코드에 대한 색상
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/mode/shell/shell";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";

const cx = classNames.bind(styles);

class EditorPane extends Component {
  editor = null; // editor ref
  codeMirror = null; // codeMirror instance

  initailizeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: "markdown",
      theme: "monokai",
      lineNumbers: true, // 라인넘버 추가
      lineWrapping: true // 내용이 길면 다음줄
    });
  };

  componentDidMount = () => {
    this.initailizeEditor();
  };

  render() {
    return (
      <div className={cx("editor-pane")}>
        <input className={cx("title")} placeholder="제목을 입력하세요" name="title" />
        <div className={cx("code-editor")} ref={ref => (this.editor = ref)} />
        <div className={cx("tags")}>
          <div className={cx("description")}>태그</div>
          <input name="tags" placeholder="태그를 입력하세요 [ 쉼표(,)로 구분 ]" />
        </div>
      </div>
    );
  }
}

export default EditorPane;
