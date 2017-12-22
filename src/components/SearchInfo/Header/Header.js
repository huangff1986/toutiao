import React, {Component} from 'react'
import Search from './Search/Search'
import './Header.css'

class Header extends Component {
  goback(event) {
    event.stopPropagation()
    window.history.back()
  }
  render() {
    return (
      <div className='SearchInfo__header'>
        <div className='SearchInfo__goback' onTouchStart={this.goback}>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1889" ><defs><style type="text/css"></style></defs><path d="M249.344 534.43l479.122 479.157c13.943 13.907 36.48 13.907 50.422 0 13.943-13.943 13.943-36.515 0-50.458l-455.73-455.765 448.205-448.241c13.551-13.516 13.551-35.446 0-48.961-13.515-13.586-35.446-13.586-48.995 0l-465.5 465.464c-1.819 1.819-2.71 4.030-4.030 6.133-1.105 0.82-2.461 1.248-3.495 2.282-13.907 13.907-13.907 36.48 0 50.387z" p-id="1890"></path></svg>
        </div>
        <Search />

      </div>
    )
  }
}

export default Header;