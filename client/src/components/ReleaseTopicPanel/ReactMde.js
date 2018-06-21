import React, {Component} from 'react';
import ReactMde from "react-mde/lib/js";
import {Input, Button} from 'antd';

import 'react-mde/lib/styles/css/react-mde-all.css';
import './style/index.css';

class ReleaseTopicPanel extends Component {
  componentDidMount(){

  }

  render() {
    const {converter, mdeState, handleValueChange} = this.props;
    return(
      <div className="m-ui-ReactMde">
          <div className="title">
            <Input></Input>
          </div>
          <ReactMde
            layout="horizontal"
            className="m-ReleaseTopicPanel"
            onChange={handleValueChange}
            editorState={mdeState}
            generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
          />
          <div className="footer">
            <Button>发布</Button>
          </div>
      </div>
    )
  }
}
export default ReleaseTopicPanel;