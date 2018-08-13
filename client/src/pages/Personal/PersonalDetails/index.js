import React, { Component } from 'react';
import './style/index.scss';

class PersonalDetails extends Component {
  // componentWillMount() {
  //   console.log(this)
  // }

 render () {
   const {userInfo} = this.props
  //  SetUserInfo(userInfo)
   return (
    <div className="PersonalDetails">

      <div className="header">
         <span className="title">个人信息</span>
         <a className="setting pull-right">[设置]</a>
      </div>

      <div className="person_info_wraper">
        <div className="aside_userface_wraper">
          <div className="aside_userface_border">
            <img src={ userInfo.UserHeaderPortrait } alt="userName"/>
          </div>

          <div className="aside_user_profile">
            <p className="aside_user_name">{ userInfo.UserName }</p>
            <p className="aside_user_info">
              <span>男</span><span></span>
            </p>
            <p className="aside_user_fans">
              粉丝：
              <a className="aside_interact_num number_font" href="/i/i/fans?u=640ce4b880e7bab8e79c9fe5bf835fa41f" target="_blank">850
              </a>
            </p>
            <p className="aside_user_concern">
              关注：
              <a className="aside_interact_num number_font" href="/i/i/concern?u=640ce4b880e7bab8e79c9fe5bf835fa41f" target="_blank">24
              </a>
            </p>
          </div>

        </div>
      </div>

      <div className="aside_menu">
        <ul>
          <li className="aside_home_li">
            <a>首页</a>
          </li> 
          <li className="aside_home_li">
            <a>我的帖子</a>
          </li> 
          <li className="aside_home_li">
            <a>回复我的</a>
          </li>
           <li className="aside_home_li">
            <a>我的提醒</a>
            <span className="new_reply_num_tip">(10新)</span>
          </li> 
          <li className="aside_home_li">
            <a>我收藏的</a>
          </li> 
        </ul>
      </div>

    </div>
   )
 }
}

export default PersonalDetails