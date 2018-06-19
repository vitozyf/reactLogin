import React, {Component} from 'react';
import './style/index.css';

class Index extends Component {
  // constructor (props) {
  //   super(props);

  // }

  render() {
    const {domref} = this.props;

    return (
      <div className="app-info_NoReplyTopicUI app-info_model"  ref={domref}>
        <div className="title">无人回复的话题</div>
        <div className="body">
          <div className="row">
            <a>Node.js Server之一：概述Node.js Server之一：概述</a>
          </div>

          <div className="row">
            <a>Node.js Server之一：概述</a>
          </div>

          <div className="row">
            <a>Node.js Server之一：概述</a>
          </div>
           <div className="row">
            <a>Node.js Server之一：概述</a>
          </div> <div className="row">
            <a>Node.js Server之一：概述</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Index