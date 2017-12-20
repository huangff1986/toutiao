import React, {Component} from 'react'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '天竺少女 | 微信启动 | 街霸小孩'}
  }

  render() {
    return (
      <div className='index_header__search' onSubmit={this.handleSubmit}>
        <span onTouchStart={this.props.handleClick}>
          {this.state.value}
        </span>
      </div>
    )
  }
}

export default Search