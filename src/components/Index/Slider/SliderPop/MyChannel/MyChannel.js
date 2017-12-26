import React, {Component} from 'react'

class MyChannel extends Component{
  constructor(props){
    super(props);
    this.state = {
      editMode: false
    }
  }
  render() {
    return (
      <div className='MyChannel'>
        <div className='header'>
          <div className='title'>
            <span className='main'>我的频道</span>
            <span className='subtitle'>
              {
                this.state.editMode 
                ? '点击进入频道'
                : '拖拽可以排序'
              }
            </span>
          </div>
          <div className='edit'>
            <span className='edit__btn'>
              {
                this.state.editMode
                ? '编辑'
                : '完成'
              }
            </span>
          </div>
        </div>
        <div className='main'>
          <ul className='channelList'>
            {
              this.props.data.map((value, index) => {
                if(value.active){
                  <li className='channelItem' key={index}>{value.title}</li>  
                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default MyChannel;