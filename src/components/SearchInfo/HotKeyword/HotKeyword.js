import React, {Component} from 'react'
import './HotKeyword.css'

class HotKeyword extends Component {
  render() {
    return (
      <div className="HotKeyword">
        <span className='HotKeyword__items'>原始人类</span>
        <span className='HotKeyword__items'>诺基亚</span>
        <span className='HotKeyword__items'>撩妹聊天</span>
      </div>
    )
  }
}

export default HotKeyword;