import React, {Component} from 'react'
import './User.css'

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='index_header__user' onClick={this.props.handleClick}>
        <svg className='userImg' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4620"><defs><style type="text/css"></style></defs><path d="M826.17 743.535c-77.281-42.915-186.69-64.372-186.69-111.59 0-66.494 102.983-126.563 102.983-287.492 0-55.794-30.063-266.063-225.271-266.063-199.57 0-225.302 210.27-225.302 266.063 0 160.93 102.983 220.998 102.983 287.492 0 47.218-107.257 68.675-186.66 111.59-70.798 38.611-141.595 66.523-141.595 141.594 0 55.795 54.026 45.126 107.64 45.126h695.21c51.491 0 102.6 8.518 102.6-45.126-4.304-75.07-75.101-102.983-145.898-141.594" p-id="4621" fill="#ffffff"></path></svg>
      </div>
    )
  }
}

export default User