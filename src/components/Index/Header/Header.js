import React, {Component} from 'react'
import './Header.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import User from '../User/User'
import Search from '../Search/Search'
import UserInfo from '../../UserInfo/UserInfo'
import SearchInfo from '../../SearchInfo/SearchInfo'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <ReactCSSTransitionGroup
      transitionName='animation'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
        <header className='index_header'>
          <User handleClick={this.props.handleTouch.openUserInfo}/>
          <Search handleClick={this.props.handleTouch.openSearchInfo}/>
        </header>

        {this.props.openState.openUserInfo?<UserInfo/>:null}
        {this.props.openState.openSearchInfo?<SearchInfo/>:null}
      </ReactCSSTransitionGroup>
    )
  }
}

export default Header;