import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style/index.scss';

class Index extends Component {
  render () {
    const {comments, user} = this.props
    // console.log(comments, user)
    return (
      <div className="c-reply-list">
        {
          comments.map((item, index) => {
            const IsAuthor = () => {return item.UserId === user.Id ? <span className = "is-author">作者</span> : null}
            const Url = item.User.UserHeaderPortrait ? item.User.UserHeaderPortrait : require('~assets/images/default.png')

            return (
              <div className = "c-reply-list-cell" key = {item.Id}>
                <div className = "cell-title">
                  <a className = "cell-head-portrait">
                    <img src = {Url} alt = {item.User.UserName}/>
                  </a>

                  <span><a className = "reply_author">{ item.User.UserName }</a></span>
                  &nbsp;&nbsp;&nbsp;
                  <span>{ index + 1 }楼</span>

                  <span><i className="iconfont icon-dot1"></i></span>

                  <span>{item.CreatedAtStr}</span>

                  <IsAuthor />
                </div>

                <div className = "cell-body" dangerouslySetInnerHTML={{__html: item.CommentContent}}></div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

Index.propTypes = {
  comments: PropTypes.array
}

Index.defaultProps = {
  comments: []
}

export default Index;