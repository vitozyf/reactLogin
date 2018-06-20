import React, {Component} from 'react';
import { Button } from 'antd';
import './style/index.css';

class Index extends Component {

  render() {
    const {domref, releaseTopic} = this.props;

    return (
      <div className="app-info_ReleaseTopic app-info_model"  ref={domref}>
        <div className="body">
         <Button type="primary" onClick={releaseTopic}>发布新话题</Button>
        </div>
      </div>
    )
  }
}
export default Index