import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {IsLogin} from 'utils/utils';
import { Button, Message } from 'antd';
import './style/index.scss';

class Index extends Component {
  releaseNewTopic = () => {
    if (IsLogin()) {
      this.props.history.push('/home/release')
    } else {
      Message.warning('请先登录')
    }
  }

  render() {
    return (
      <div className="app-info_ReleaseTopic app-info_model">
        <div className="body">
         <Button type="primary" onClick={() => {this.releaseNewTopic()}}>发布新话题</Button>
        </div>
      </div>
    )
  }
}
export default withRouter(Index)