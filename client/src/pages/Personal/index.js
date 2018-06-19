import React, { Component } from 'react';
import PersonalDetails from 'components/PersonalDetails/index';
import './style/index.css';

class Personal extends Component {
 render () {
   return (
     <div className="Personal">
       <PersonalDetails />
     </div>
   )
 }
}

export default Personal