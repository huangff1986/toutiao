import React, {Component} from 'react'
import './MyChannel.css'

class MyChannel extends Component{
  constructor(props){
    super(props);
    this.state = {
      editMode: false
    }
  }

  editHandleClick(){
    this.setState({
      editMode: !this.state.editMode
    })
  }
  render() {
    return (
      <div className='MyChannel'>
        <div className='header'>
          <div className='title'>
            <span className='maintitle'>我的频道</span>
            <span className='subtitle'>
              {
                this.state.editMode 
                ? '拖拽可以排序'
                : '点击进入频道'
              }
            </span>
          </div>
          <div className='edit'>
            <span className='edit__btn' onTouchStart={this.editHandleClick.bind(this)}>
              {
                this.state.editMode
                ? '完成'
                : '编辑'
              }
            </span>
          </div>
        </div>
        <div className='main'>
          <ul className='channelList'>
            {
              this.props.data.map((value, index) => {
                if(value.active){
                  return (
                    <li className={!value.static ? 'channelItem' : 'channelItem static'} onTouchStart = { this.state.editMode ? this.props.removeChannel : null} key={index} data-key={index}>
                      {value.title}
                      {
                        this.state.editMode && !value.static
                        ? <svg className='delBtn' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1973"><defs><style type="text/css"></style></defs><path d="M512 33.129412C246.964706 33.129412 33.129412 246.964706 33.129412 512S246.964706 990.870588 512 990.870588 990.870588 777.035294 990.870588 512 777.035294 33.129412 512 33.129412z m183.717647 605.364706c9.035294 9.035294 9.035294 21.082353 0 27.105882l-27.105882 27.105882c-9.035294 9.035294-21.082353 9.035294-27.105883 0l-126.494117-126.494117-126.494118 126.494117c-9.035294 9.035294-21.082353 9.035294-27.105882 0l-27.105883-27.105882c-9.035294-9.035294-9.035294-21.082353 0-27.105882l126.494118-126.494118-126.494118-126.494118c-9.035294-9.035294-9.035294-21.082353 0-27.105882l27.105883-27.105882c9.035294-9.035294 21.082353-9.035294 27.105882 0l126.494118 126.494117 126.494117-126.494117c9.035294-9.035294 21.082353-9.035294 27.105883 0l27.105882 27.105882c9.035294 9.035294 9.035294 21.082353 0 27.105882L569.223529 512l126.494118 126.494118z" p-id="1974" fill="#ccc"></path></svg>
                        : null
                      }
                    </li>  
                  )
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