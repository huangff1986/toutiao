import React, {Component} from 'react'
import './SliderPop.css'
import MyChannel from './MyChannel/MyChannel'

class SliderPop extends Component {
  handleBack() {
    window.history.back()
  }
  render() {
    return (
        <div className='sliderPop'>
          <div className='warpper'>
            <div className='sliderPop__header'>
              <svg className='closeBtn' onTouchStart={this.handleBack} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1868"><defs><style type="text/css"></style></defs><path d="M972.28602785 984.40290608a37.36037452 37.36037452 0 0 1-26.40858074-10.95179378L46.27691141 73.85057659a37.28270222 37.28270222 0 1 1 52.81716148-52.81716148l899.678208 899.678208a37.43804682 37.43804682 0 0 1-26.48625304 63.69128297" fill="#434243" p-id="1869"></path><path d="M72.68549215 984.40290608a37.28270222 37.28270222 0 0 1-26.40858074-63.76895526L945.95511941 21.03341511a37.36037452 37.36037452 0 0 1 52.73948918 52.81716148L99.09407289 973.4511123a37.28270222 37.28270222 0 0 1-26.40858074 10.95179378" fill="#434243" p-id="1870"></path></svg>
            </div>
            <MyChannel data={this.props.data}/>
          </div>
        </div>
    )
  }
}

export default SliderPop;