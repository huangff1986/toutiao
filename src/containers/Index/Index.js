import React, {Component} from 'react'
import Header from '../Header/Header'
import Slider from './Slider/Slider'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      openUserInfo: false,
      openSearchInfo: false,
      openSliderPop: false
    }
  }

  componentWillMount() {
    window.history.pushState({page:'home'},'', ' ')
    this._isCurrent=this._isCurrent.bind(this);
    window.addEventListener('popstate', this._isCurrent)
  }

  // 打开用户信息慢板
  openUserInfo() {
    this._openUserInfoHistory()
  }

  _openUserInfoHistory() {
    window.history.pushState({page:'openUserInfo'}, '', ' ');
    this._isCurrent()
  }

  // 打开搜索面板
  openSearchInfo() {
    this._openSearchInfoHistory()
  }

  _openSearchInfoHistory() {
    window.history.pushState({page:'openSearchInfo'},'', ' ');
    this._isCurrent()
  }

  // 打开滑块设置弹窗
  openSliderPop() {
    this.setState({
      openSliderPop: true
    })
    this._openSliderPopHistory()
  }

  _openSliderPopHistory() {
    window.history.pushState({page:'openSliderPop'},'', ' ')
    this._isCurrent()
  }

  _isCurrent() {
    console.log('popState')
    if(!window.history.state){return;}
    if(window.history.state.page==='openUserInfo'){
      console.log('openUserInfo')
      this.setState({
        openUserInfo: true
      });
    } else if(window.history.state.page==='openSearchInfo'){
      console.log('openUsopenSearchInfoerInf')
      this.setState({
        openSearchInfo: true
      })
    } else if(window.history.state.page==='openSliderPop'){
      console.log('openSliderPop')
      this.setState({
        openSliderPop: true
      })
    } else if(window.history.state.page==='home'){
      this.setState({
        openUserInfo: false,
        openSearchInfo: false,
        openSliderPop: false
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this._isCurrent)
  }

  render() {
    return (
      <div>
        <Header
          openState={{
            openUserInfo: this.state.openUserInfo,
            openSearchInfo: this.state.openSearchInfo
          }}
          handleTouch={{
            openUserInfo: this.openUserInfo.bind(this),
            openSearchInfo: this.openSearchInfo.bind(this)
          }}
        />
        <Slider
          openState={{
            openSliderPop: this.state.openSliderPop
          }}
          handleTouch={{
            openSliderPop: this.openSliderPop.bind(this)
          }}
        />
      </div>
    )
  }
}

export default Index;