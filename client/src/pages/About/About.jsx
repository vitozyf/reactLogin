import React from 'react';
import {withRouter} from 'react-router-dom';

class AboutUi extends React.Component {
  componentWillMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div>About child</div>
    )
  }
}

export default withRouter(AboutUi)