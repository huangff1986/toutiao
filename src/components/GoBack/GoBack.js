import React, {Component} from 'react'
import './GoBack.css'

class GoBack extends Component {
  handleBack(){

    window.history.back()
    console.log(window.history.state)
  }

  render() {
    return (
      <div className='common_goback' onClick={this.handleBack}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 32" version="1.1"><path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"/></svg>
      </div>
    )
  }
}

export default GoBack