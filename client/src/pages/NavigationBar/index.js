import React, {Component} from 'react';
import NavigationBarUi from './NavigationBarUi'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import './style/NavigationBar.css'



const NavigationBarComnect = connect((state, props) => {
  return Object.assign({}, state.user, props) 
  }, dispatch => {
    return {
      SetUserInfo: (IsLogin) => {
        return dispatch({
          type: 'SetUserInfo',
          IsLogin: IsLogin
        })
      }
    }
})(NavigationBarUi)


class NavigationBar extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  render () {
    return (
      <NavigationBarComnect>
      </NavigationBarComnect>
    )
  }
}

export default NavigationBar;
