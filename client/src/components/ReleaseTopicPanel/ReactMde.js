import React, {Component} from 'react';
import ReactMde from "react-mde/lib/js";
import {Input, Button, Select} from 'antd';

import 'react-mde/lib/styles/css/react-mde-all.css';
import './style/index.css';

const Option = Select.Option;

class ReleaseTopicPanel extends Component {
  componentDidMount(){

  }

  render() {
    const {
      converter, 
      mdeState, 
      handleValueChange, 
      onChangeHandler, 
      Title, 
      Plate, 
      releaseTopic, 
      handleChange} = this.props;

    return(
      <div className="m-ui-ReactMde">
          <div className="title">
            <div className="plate">
              <label>请选择板块：</label>
              <Select defaultValue={Plate} style={{width: '200px'}} onChange={handleChange} name="Plate">
                <Option value={1}>分享</Option>
                <Option value={2}>问答</Option>
                <Option value={3}>测试</Option>
              </Select>
            </div>

            <div className="plate">
              <Input 
                onChange={onChangeHandler} 
                name="Title" 
                value={Title}
                placeholder="标题字数十字以上"
              ></Input>
            </div>
          </div>
          <ReactMde
            layout="horizontal"
            className="m-ReleaseTopicPanel"
            onChange={handleValueChange}
            editorState={mdeState}
            generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
          />

          <div className="footer">
            <Button onClick={releaseTopic}>发布</Button>
          </div>
      </div>
    )
  }
}
export default ReleaseTopicPanel;