import React, {Component} from 'react';
import InfoCommon from 'components/InfoCommon';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Avatar} from 'antd';
import './style/index.scss';

const mapStateToProps = (state, props) => {
  return Object.assign({}, {user: state.user}, props);
}

class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }


  render() {
    console.log(this.props.user)
    const user = this.props.user
    return (
      <InfoCommon className="c-PersonInfo">
        <div className="c-PersonInfo-bg">
          <div className="c-PersonInfo-top">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527245834290&di=2286cc7354adc925f79b92b719162dd4&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140828%2F0005018403917054_b.jpg" alt="bg"/>
          </div>
          <div className="c-PersonInfo-bottom">
            <p className="userName">{user.UserName}</p>
            <p className="userSignature">前端打字员</p>
            <p className="userData">文章 - 8 &nbsp;&nbsp;|&nbsp;&nbsp; 访问 - 4682</p>
          </div>
          <Avatar size={64} icon="user" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=621835079,1797660709&fm=27&gp=0.jpg" alt="用户头像"/>
        </div>
      </InfoCommon>
    )
  }
}
export default connect(mapStateToProps)(withRouter(Index))