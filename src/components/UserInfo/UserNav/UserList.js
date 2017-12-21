import React, {Component} from 'react'

class UserList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <ul className='UserNav__UserList'>
        {
          this.props.data.map((value, index) => {
            return (
              <li className='UserNav__item' key={index}>
                <span className='UserNav__title'>{value.title}</span>
                {
                  value.content  
                    ? <span className='UserNav__content'>{value.content}</span> 
                    : null
                }
                <svg className='UserNav__arrow' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12195"><defs><style type="text/css"></style></defs><path d="M647.763 490.982c12.499-12.499 32.755-12.499 45.253 0v0c12.499 12.499 12.499 32.755 0 45.253l-316.781 316.781c-12.499 12.499-32.755 12.499-45.253 0v0c-12.499-12.499-12.499-32.755 0-45.253l316.781-316.781z" p-id="12196" fill="#e6e6e6"></path><path d="M330.982 216.237c-12.499-12.499-12.499-32.755 0-45.253v0c12.499-12.499 32.755-12.499 45.253 0l316.781 316.781c12.499 12.499 12.499 32.755 0 45.253v0c-12.499 12.499-32.755 12.499-45.253 0l-316.781-316.781z" p-id="12197" fill="#e6e6e6"></path></svg>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default UserList;