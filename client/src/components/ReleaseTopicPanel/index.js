import React, {Component} from 'react';
import ReactMde from './ReactMde';
import * as Showdown from "showdown";
import http from 'utils/http';
import {Message} from 'antd';
import {withRouter} from 'react-router-dom';

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
        Title: '',
        Plate: 1
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

  handleChange = (value) => {
    this.setState({
      Plate: value
    })
  }

  releaseTopic = () => {
    if (this.state.mdeState) {
      http.$post(Config.releaseTopic, {
        TopicName: this.state.Title,
        TopicContent: this.state.mdeState.html,
        Plate: this.state.Plate
      }).then((data) => {
        if(data) {
          Message.success('发布成功！')
          this.props.history.push('/home')
        }
      })
    }
  }

  render() {
    return(
      <ReactMde 
        Title={this.state.Title}
        Plate={this.state.Plate}
        onChangeHandler={this.onChangeHandler}
        handleChange={this.handleChange}
        releaseTopic={this.releaseTopic}
        converter={this.converter}
        mdeState={this.state.mdeState} 
        handleValueChange={this.handleValueChange}/>
    )
  }
}
export default withRouter(ReleaseTopicPanel);