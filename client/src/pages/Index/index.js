import React, { Component } from 'react';
import { Tabs } from 'antd';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
// 页面
import AllTopic from 'pages/Index/AllTopic/index';
import EssentialTopic from 'pages/Index/EssentialTopic/index';
import ShareTopic from 'pages/Index/ShareTopic/index';
import AskTopic from 'pages/Index/AskTopic/index';
import TestTopic from 'pages/Index/TestTopic/index';
import TopicDetails from 'pages/Index/TopicDetails/index';
import ReleaseTopicPanel from 'pages/Index/ReleaseTopicPanel/index';

// 右栏
import Info from 'components/Info/index';
import './style/index.scss';

const TabPane = Tabs.TabPane;

const mapStateToProps = (state, props) => {
  return Object.assign({}, props);
}
// 全部
const AllTopicComponent = connect(
  mapStateToProps,
)(AllTopic)
// 精华
const EssentialTopicComponent = connect(
  mapStateToProps,
)(EssentialTopic)
// 分享
const ShareTopicComponent = connect(
  mapStateToProps,
)( ShareTopic)
// 问答
const AskTopicComponent = connect(
  mapStateToProps,
)(AskTopic)
// 测试
const TestTopicComponent = connect(
  mapStateToProps,
)(TestTopic)


const InfoComponent = connect(
  mapStateToProps
)(Info)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  // tab切换
  callback = (key) => {
    // console.log(key)
  }

  render() {
    const {history} = this.props
    
    let TopicsCom = () => (
      <Tabs 
        defaultActiveKey="allTopic"
        onChange={this.callback}>
        <TabPane 
          tab = {<span>全部</span>} 
          key="allTopic">
          <AllTopicComponent />
        </TabPane>

        <TabPane 
          tab={<span>精华</span>} 
          key="essentialTopic">
          <EssentialTopicComponent />
        </TabPane>

        <TabPane 
          tab="分享" 
          key="shareTopic">
          <ShareTopicComponent />
        </TabPane>

        <TabPane tab="问答" key="askTopic">
          <AskTopicComponent />
        </TabPane>

        <TabPane tab="测试" key="testTopic">
          <TestTopicComponent />
        </TabPane>
      </Tabs>
    )

    let PeleaseCom = () => (
      <Tabs defaultActiveKey="pelease" onChange={this.callback} >
        <TabPane 
          tab = {
            <span className="peleaseTopic"><a onClick={() => {history.push('/home')}}>主页</a> / 发布话题</span>
          } 
          key="pelease">
          <ReleaseTopicPanel></ReleaseTopicPanel>
        </TabPane>
      </Tabs>
    )

    return (
      <div className="App">
        <Route exact path="/home" render={()=>(<TopicsCom></TopicsCom>)} />
        <Route exact path="/home/release" render={()=>(<PeleaseCom></PeleaseCom>)} />
        <Route exact path="/home/topicDetails/:id" render={()=>(<TopicDetails></TopicDetails>)} />
        <InfoComponent />
      </div>
    );
  }
}

export default App;