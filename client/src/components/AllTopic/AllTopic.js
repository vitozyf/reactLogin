import React, {Component} from 'react';
import './style/index.css';

class Index extends Component {
  render() {
    // console.log(this.props)
    const {topicList, enterIntoTopic} = this.props
    return (
      <div className="AllTopic topic_list" onClick={event=>{enterIntoTopic(event)}}>
        {
          topicList.map((topic, index) => {
            return (
              <div className="cell" key={index}>
                <h3>
                  { topic.TopicName }
                </h3>

                <div className="subhead">
                  <span>发表于： </span>
                  <span>标签： </span>
                  <span>浏览： </span>
                </div>

                <div className="content">
                  最近有个需求怎么把一个一维数组转换成一个二维数组 数据如上，怎么把每一项title里_前面的数据当初数组的title。如果前一半字符相同，就往children数组里添加一项， 一直用map没有实现，于是我想到了es6 的 reduce函数，花不多说，直接上代码...最近有个需求怎么把一个一维数组转换成一个二维数组 数据如上，怎么把每一项title里_前面的数据当初数组的title。如果前一半字符相同，就往children数组里添加一项， 一直用map没有实现，于是我想到了es6 的 reduce函数，花不多说，直接上代码...
                </div>

                <div 
                  className="read-more"
                  data-id={topic.ID}>
                  阅读全文>>
                </div>
              </div>
            )
          })
        }
      </div>
      
    )
  }
}
export default Index