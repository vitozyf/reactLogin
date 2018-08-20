import React, {Component} from 'react';
import InfoCommon from 'components/InfoCommon';
import './style/index.scss';

class Index extends Component {
  render() {
    return (
      <InfoCommon title = "友情链接">
        <p><a href="https://cnodejs.org/" target="_blank" rel="noopener noreferrer">Node社区</a></p>
        <p><a href="https://ruby-china.org/topics/node72" target="_blank" rel="noopener noreferrer">Ruby China React </a></p>
        <p><a href="https://github.com/vitozyf" target="_blank" rel="noopener noreferrer">Vito GitHub</a></p>
      </InfoCommon>
      // <Card title = "友情链接" className = "app-info_BlogRollUI">
      //   <p><a href="https://cnodejs.org/" target="_blank" rel="noopener noreferrer">Node社区</a></p>
      //   <p><a href="https://ruby-china.org/topics/node72" target="_blank" rel="noopener noreferrer">Ruby China React </a></p>
      //   <p><a href="https://github.com/vitozyf" target="_blank" rel="noopener noreferrer">Vito GitHub</a></p>
      // </Card>
    )
  }
}
export default Index