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
  cursor = null; // 에디터의 텍스트 cursor 위치

  initailizeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: "markdown",
      theme: "monokai",
      lineNumbers: true, // 라인넘버 추가
      lineWrapping: true // 내용이 길면 다음줄
    });
    this.codeMirror.on("change", this.handleChangeMarkdown);
  };

  componentDidMount = () => {
    this.initailizeEditor();
  };

  handleChange = e => {
    const { onChangeInput } = this.props;
    const { name, value } = e.target;
    onChangeInput({ name, value });
  };

  handleChangeMarkdown = doc => {
    const { onChangeInput } = this.props;
    this.cursor = doc.getCursor();
    onChangeInput({
      name: "markdown",
      value: doc.getValue()
    });
  };

  /** cdup
   * markdown이 변경되면 에디터 값도 변경합니다.
   * 이 과정에서 텍스트 커서의 위치가 초기화되기 때문에,
   * 저장한 커서의 위치가 있으면 해당 위치로 설정합니다.
   */
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.markdown !== this.props.markdown) {
      const { codeMirror, cursor } = this;
      if (!codeMirror) return;
      codeMirror.setValue(this.props.markdown);
      if (!cursor) return;
      codeMirror.setCursor(cursor);
    }
  };

  render() {
    const { handleChange } = this;
    const { tags, title } = this.props;
    return (
      <div className={cx("editor-pane")}>
        <input
          className={cx("title")}
          placeholder="제목을 입력하세요"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <div className={cx("code-editor")} ref={ref => (this.editor = ref)} />
        <div className={cx("tags")}>
          <div className={cx("description")}>태그</div>
          <input
            name="tags"
            placeholder="태그를 입력하세요 [ 쉼표(,)로 구분 ]"
            value={tags}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default EditorPane;
