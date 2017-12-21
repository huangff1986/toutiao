import React, {Component} from 'react'
import UserList from './UserList'
import './UserNav.css'

let data1 = [
  {title:'我的关注'},
  {title:'消息通知'}
]

let data2 = [
  {title: '头条商城', content:'邀请好友得200元现金奖励'},
  {title: '京东特供', content:'新人领188元红包'}
]

let data3 = [
  {title: '我要爆料'},
  {title: '用户反馈'},
  {title: '系统设置'}
]

class UserNav extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='UserInfo__UserNav'>
        <UserList data={data1}/>
        <UserList data={data2}/>
        <UserList data={data3}/>
      </div>
    )
  }
}

export default UserNav;