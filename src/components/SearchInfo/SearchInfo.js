import React, {Component} from 'react'
import './SearchInfo.css'
import Header from './Header/Header'
import HotKeyword from './HotKeyword/HotKeyword'
import History from './History/History'
import Guess from './Guess/Guess'


class SearchInfo extends Component {
  constructor(props){
    super(props);
    this.state={
      showRecommend: true
    }

    this.handleShowRecommendClick = this.handleShowRecommendClick.bind(this);
  }

  handleShowRecommendClick(event){
    this.setState({
      showRecommend: !this.state.showRecommend
    })
  }
  render() {
    return (
      <div className='index_header__SearchInfo'>
        <Header/>
        {
          this.state.showRecommend
          ? <HotKeyword/>
          : null
        }
        <History/>
        <Guess showRecommend={this.state.showRecommend} handleShowRecommendClick={this.handleShowRecommendClick}/>
      </div>
    )
  }
}

export default SearchInfo;