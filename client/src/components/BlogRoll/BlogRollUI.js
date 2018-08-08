import React, {Component} from 'react';
import './style/index.scss';

class Index extends Component {
  render() {
    return (
      <div className="app-info_BlogRollUI app-info_model">
        <div className="title">友情链接</div>
        <div className="body">
          <div className="row">
            <a href="https://cnodejs.org/" target="_blank" rel="noopener noreferrer">Node社区</a>
          </div>

          <div className="row">
            <a href="https://ruby-china.org/topics/node72" target="_blank" rel="noopener noreferrer">Ruby China React </a>
          </div>

          <div className="row">
            <a href="https://github.com/vitozyf" target="_blank" rel="noopener noreferrer">Vito GitHub</a>
          </div>
          
        </div>
      </div>
    )
  }
}
export default Index