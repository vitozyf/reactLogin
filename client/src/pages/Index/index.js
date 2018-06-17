import React, { Component } from 'react';
import { Tabs } from 'antd';
import AllTopic from 'components/AllTopic/index';
import Info from 'components/Info/index';
import {connect} from 'react-redux';
import './style/index.css';

const TabPane = Tabs.TabPane;

const mapStateToProps = (state, props) => {
  return Object.assign({}, props);
}

const AllTopicComponent = connect(
  mapStateToProps,
  // dispatch => {
  //   return
  // }
)(AllTopic)

const InfoComponent = connect(
  mapStateToProps,
)(Info)

class App extends Component {

  callback = (key) => {
    console.log(key)
  }

  render() {
    return (
      <div className="App">
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

        <InfoComponent />
      </div>
    );
  }
}

export default App;