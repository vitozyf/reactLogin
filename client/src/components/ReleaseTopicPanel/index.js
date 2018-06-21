import React, {Component} from 'react';
import ReactMde from './ReactMde';
import * as Showdown from "showdown";

class ReleaseTopicPanel extends Component {
  componentDidMount(){
    console.log(this)
  }

  constructor(props) {
    super(props);
    this.state = {
        mdeState: null,
    };
    this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
  }

  handleValueChange = (mdeState) => {
    this.setState({mdeState});
    console.log(mdeState)
  }

  render() {
    return(
      <ReactMde 
        converter={this.converter}
        mdeState={this.state.mdeState} 
        handleValueChange={this.handleValueChange}/>
    )
  }
}
export default ReleaseTopicPanel;