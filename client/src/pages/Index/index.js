import React, { Component } from 'react';
import { Tabs } from 'antd';
import { Route } from 'react-router-dom';
import AllTopic from 'components/AllTopic/index';
import Info from 'components/Info/index';
import ReleaseTopicPanel from 'components/ReleaseTopicPanel/index';
import TopicDetails from 'components/TopicDetails/index';
import {connect} from 'react-redux';
// import {IsLogin} from 'utils/utils';
import './style/index.css';

const TabPane = Tabs.TabPane;

const mapStateToProps = (state, props) => {
  return Object.assign({}, props);
}

const AllTopicComponent = connect(
  mapStateToProps,
)(AllTopic)

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
    console.log(key)
  }

  render() {
    const {history} = this.props
    
    let TopicsCom = () => (
      <Tabs defaultActiveKey="allTopic" onChange={this.callback}>
        <TabPane 
          tab = {<span>全部</span>} 
          key="allTopic">
          <AllTopicComponent></AllTopicComponent>
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

    let PeleaseCom = () => (
      <Tabs defaultActiveKey="pelease" onChange={this.callback} >
        <TabPane 
          tab = {
            <span className="peleaseTopic"><a onClick={() => {history.push('/home')}}>主页</a> / 发布话题</span>
          } 
          key="pelease">
          <ReleaseTopicPanel backHOme={this.backHOme}></ReleaseTopicPanel>
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