import React, {Component} from 'react'
import './SearchInfo.css'
import Header from './Header/Header'
import HotKeyword from './HotKeyword/HotKeyword'
import History from './History/History'


class SearchInfo extends Component {
  render() {
    return (
      <div className='index_header__SearchInfo'>
        <Header/>
        <HotKeyword/>
        <History/>
      </div>
    )
  }
}

export default SearchInfo;