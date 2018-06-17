import React, { Component } from 'react';
import { Tabs } from 'antd';
import './style/index.css';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class App extends Component {
  render() {
  console.log(this)
    return (
      <Tabs defaultActiveKey="allTopic" onChange={callback}>
        <TabPane tab = {<span>全部</span>} key="allTopic">Content of Tab Pane 1</TabPane>
        <TabPane tab="精华" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="分享" key="3">Content of Tab Pane 3</TabPane>
        <TabPane tab="问答" key="4">Content of Tab Pane 3</TabPane>
      </Tabs>
    );
  }
}


export default App;