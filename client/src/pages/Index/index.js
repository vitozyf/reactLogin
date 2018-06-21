import React, { Component } from 'react';
import { Tabs } from 'antd';
import AllTopic from 'components/AllTopic/index';
import Info from 'components/Info/index';
import ReleaseTopicPanel from 'components/ReleaseTopicPanel/index';
import {connect} from 'react-redux';
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

  releaseTopic = (event) => {
    this.setState({
      componentType: 'pelease'
    })
  }

  backHOme = () => {
    this.setState({
      componentType: 'topics'
    })
  }

  render() {
    let topicsCom = (
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

    let peleaseCom = (
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

    const type = this.state.componentType
    return (
      <div className="App">
        {
          type === 'topics' ? topicsCom : type === 'pelease' ? peleaseCom : null
        }

        <InfoComponent releaseTopic={this.releaseTopic} componentType={this.state.componentType}/>
      </div>
    );
  }
}

export default App;