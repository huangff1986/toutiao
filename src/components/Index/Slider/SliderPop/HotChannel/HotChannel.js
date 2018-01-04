import React, {Component} from 'react'
import './HotChannel.css'

class HotChannel extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='HotChannel'>
        <div className='header'>
          <div className='title'>
            <span className='maintitle'>频道推荐</span>
            <span className='subtitle'>点击添加频道</span>
          </div>
        </div>
        <div className='main'>
          <ul className='channelList'>
            {
              this.props.data.map((value, index)=> {
                if(!value.active){
                  return (
                    <li 
                      className='channelItem' 
                      onTouchStart={this.props.addChannel(value.title)} 
                      key={index} 
                    >
                      +{value.title}
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

export default HotChannel;