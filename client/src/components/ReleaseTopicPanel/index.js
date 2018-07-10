import React, {Component} from 'react';
import ReactMde from './ReactMde';
import * as Showdown from "showdown";
import http from 'utils/http';
import { Message } from 'antd';

const Config = {
  releaseTopic: '/topic/release'
}

class ReleaseTopicPanel extends Component {
  componentDidMount(){
    // console.log(this)
  }

  constructor(props) {
    super(props);
    this.state = {
        mdeState: null,
        Title: ''
    };
    this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
  }

  handleValueChange = (mdeState) => {
    this.setState({mdeState});
  }

  onChangeHandler = (event) => {
    let Obj = {}
    Obj[event.target.name] = event.target.value
    this.setState(Obj)
  }

  releaseTopic = () => {
    http.$post(Config.releaseTopic, {
      TopicName: this.state.Title,
      TopicContent: this.state.mdeState.html
    }).then((data) => {
      if(data && data.Code === 0) {
        console.log(this.$props, data)
      }
    })
  }

  render() {
    return(
      <ReactMde 
        Title={this.state.Title}
        onChangeHandler={this.onChangeHandler}
        releaseTopic={this.releaseTopic}
        converter={this.converter}
        mdeState={this.state.mdeState} 
        handleValueChange={this.handleValueChange}/>
    )
  }
}
export default ReleaseTopicPanel;