import React, {Component} from 'react'
import './Header.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import User from '../User/User'
import Search from '../Search/Search'
import UserInfo from '../../UserInfo/UserInfo'
import SearchInfo from '../../SearchInfo/SearchInfo'

class Header extends Component {
  constructor() {
    super();
    this.state={
      openUserInfo: false,
      openSearchInfo: false
    }
  }

  componentWillMount() {
    window.history.pushState({page:'home'},'', ' ');
    this._isCurrent=this._isCurrent.bind(this);
    window.addEventListener('popstate', this._isCurrent)
  }

  openUserInfoHandleClick() {
    this.setState({
      openUserInfo: true
    })
    this._openUserInfoHistory()
  }

  openSearchInfoHandleClick() {
    this.setState({
      openSearchInfo: true
    })
    this._openSearchInfoHistory()
  }

  _isCurrent() {
    if(!window.history.state){return;}
    if(window.history.state.page==='openUserInfo'){
      this.setState({
        openUserInfo: true
      });
    } else if(window.history.state.page==='openSearchInfo'){
      this.setState({
        openSearchInfo: true
      })
    } else if(window.history.state.page==='home'){
      this.setState({
        openUserInfo: false,
        openSearchInfo: false
      })
    }
  }

  _openUserInfoHistory() {
    window.history.pushState({page:'openUserInfo'}, '', ' ');
    this._openUserInfoHistory._isCurrent=true;
  }

  _openSearchInfoHistory() {
    window.history.pushState({page:'openSearchInfo'},'', ' ');
    this._openSearchInfoHistory._isCurrent=true;
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this._isCurrent)
  }

  render(){
    return (
      <ReactCSSTransitionGroup
      transitionName='animation'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
        <header className='index_header'>
          <User handleClick={this.openUserInfoHandleClick.bind(this)}/>
          <Search handleClick={this.openSearchInfoHandleClick.bind(this)}/>
        </header>

        {this.state.openUserInfo?<UserInfo/>:null}
        {this.state.openSearchInfo?<SearchInfo/>:null}
      </ReactCSSTransitionGroup>
    )
  }
}

export default Header;