import React, {Component} from 'react'
import Header from '../../components/Index/Header/Header'

class HeaderContainer extends Component {
  render(){
    return (
      <div className='wrapper'>
        <Header
          openState={{
            openUserInfo: this.props.openState.openUserInfo,
            openSearchInfo: this.props.openState.openSearchInfo
          }}
          handleTouch={{
            openUserInfo: this.props.handleTouch.openUserInfo,
            openSearchInfo: this.props.handleTouch.openSearchInfo
          }}
        />
      </div>
    )
  }
}

export default HeaderContainer;