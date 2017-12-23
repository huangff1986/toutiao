import React, {Component} from 'react'
import ShowMain from './ShowMain/ShowMain'
import HideMain from './HideMain/HideMain'
import './Guess.css'

let data = [
  '自来水安装',
  '金牛座女',
  '魔术教学',
  '非洲生活',
  '索尼爱立信霸气',
  '野外放养',
  '氩弧焊焊接',
  '半岛局势',
  '火山视频',
  '中国先进战机',
  '大众辉腾价格',
  '加拿大科学家',
  '手机尾号'
]

class Guess extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='Guess'>
        {
          this.props.showRecommend
          ? <ShowMain data={data} handleShowRecommendClick={this.props.handleShowRecommendClick}/>
          : <HideMain handleShowRecommendClick={this.props.handleShowRecommendClick}/>
        }
      </div>
    )
  }
}

export default Guess;