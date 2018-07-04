import React, { Component } from 'react';
import { Tabs } from 'antd';
import AllTopic from 'components/AllTopic/index';
import Info from 'components/Info/index';
import ReleaseTopicPanel from 'components/ReleaseTopicPanel/index';
// import TopicDetails from 'components/TopicDetails/index';
import {connect} from 'react-redux';
import {IsLogin} from 'utils/utils';
import {Message} from 'antd';
import './style/index.css';

const TabPane = Tabs.TabPane;

const mapStateToProps = (state, props) => {
  // console.log(2, props, Object.assign({}, props))
  return Object.assign({}, props);
}

const AllTopicComponent = connect(
  mapStateToProps,
  // dispatch => {
  //   return
  // }
)(AllTopic)

const InfoComponent = connect(
  mapStateToProps
)(Info)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      componentType: 'topics'
    }
  }

  callback = (key) => {
    console.log(key)
  }

  releaseTopic = (type) => {
    if (IsLogin()) {
      this.setState({
        componentType: type
      })
    } else {
      Message.error('请先登录')
    }
  }

  backHOme = () => {
    this.setState({
      componentType: 'topics'
    })
  }

  render() {
    const type = this.state.componentType
    
    let TopicsCom = (
      <Tabs defaultActiveKey="allTopic" onChange={this.callback}>
        <TabPane 
          tab = {<span>全部</span>} 
          key="allTopic">
          <AllTopicComponent releaseTopic={this.releaseTopic}></AllTopicComponent>
        </TabPane>

        <TabPane 
          tab={<span>精华</span>} 
          key="essentialTopic">
          Content of Tab Pane 2
        </TabPane>

        <TabPane tab="分享" key="3">Content of Tab Pane 3</TabPane>

        <TabPane tab="问答" key="4">Content of Tab Pane 3</TabPane>
      </Tabs>
    )

    let PeleaseCom = (
      <Tabs defaultActiveKey="pelease" onChange={this.callback} >
        <TabPane 
          tab = {
            <span className="peleaseTopic"><a onClick={this.backHOme}>主页</a> / 发布话题</span>
          } 
          key="pelease">
          <ReleaseTopicPanel backHOme={this.backHOme}></ReleaseTopicPanel>
        </TabPane>
      </Tabs>
    )

    let TopicDetailsCom = (
      <div></div>
          // <TopicDetails backHOme={this.backHOme}></TopicDetails>
    )

    let ComponentCom

    switch (type) {
      case 'topics': 
        ComponentCom = TopicsCom;
        break;
      case 'pelease': 
        ComponentCom = PeleaseCom;
        break;
      case 'topicLine': 
        ComponentCom = TopicDetailsCom;
        break;
      default:
        ComponentCom = null;
    }

    return (
      <div className="App">
        {ComponentCom}
        <InfoComponent releaseTopic={this.releaseTopic} componentType={this.state.componentType}/>
      </div>
    );
  }
}

export default App;