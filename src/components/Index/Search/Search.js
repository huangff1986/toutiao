import React, {Component} from 'react'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '天竺少女 | 微信启动 | 街霸小孩'}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault()
  }

  handleSubmit(event) {
    alert('A name was submitted:' + this.state.value)
    event.preventDefault()
  }
  render() {
    return (
      <from className='index_header__search' onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value} onChange={this.handleChange} onTouchStart={this.props.handleClick} />
      </from>
    )
  }
}

export default Search