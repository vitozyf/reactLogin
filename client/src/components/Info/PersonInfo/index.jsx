import React, {Component} from 'react';
import InfoCommon from 'components/InfoCommon';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, props) => {
  return props
}

const mapDispatchToProps = (dispatch) => {
  return {
    xxx : () => {
      return {}
    }
  }
}

const PersonInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoCommon) 

class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  enterIntoTopic = (event) => {
    const id = event.target.dataset.id
    if (typeof id !== 'undefined') {
      this.props.history.push(`/home/topicDetails/${id}`)
    }
  }

  render() {
    return (
      <PersonInfo />
    )
  }
}
export default withRouter(Index)