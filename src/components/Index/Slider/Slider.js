import React, {Component} from 'react'
import './Slider.css'
import SliderPop from './SliderPop/SliderPop'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Slider extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName='animation--up'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <div className='index_Slider'>
          <div className='slider__warpper'>
            <ul className='slider__list'>
              {
                this.props.data.map((value,index) => {
                  if(value.active){
                    return(
                      <li className='Slider__item' key={index}>{value.title}</li>
                    )
                  }
                })
              }
              <div className='slider__space' onTouchStart={this.props.handleTouch.openSliderPop}></div>
            </ul>
            <div className='slider__btn' onTouchStart={this.props.handleTouch.openSliderPop}>
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1856"><defs><style type="text/css"></style></defs><path d="M970.3162311111112 540.7982933333334h-916.6335999999999c-15.339519999999998 0-27.77656888888889-12.590648888888888-27.77656888888889-27.942684444444442s12.437048888888887-27.942684444444442 27.77656888888889-27.942684444444442h916.6335999999999c15.339519999999998 0 27.77656888888889 12.590648888888888 27.77656888888889 27.942684444444442s-12.437048888888887 27.942684444444442-27.77656888888889 27.942684444444442z" p-id="1857"></path><path d="M539.8084266666667 54.54051555555566v916.6335999999999c0 15.339519999999998-12.590648888888888 27.77656888888889-27.942684444444442 27.77656888888889s-27.942684444444442-12.437048888888887-27.942684444444442-27.77656888888889v-916.6335999999999c0-15.339519999999998 12.590648888888888-27.77656888888889 27.942684444444442-27.77656888888889s27.942684444444442 12.437048888888887 27.942684444444442 27.77656888888889z" p-id="1858"></path></svg>
            </div>
          </div>
        </div>
          {
            this.props.openState.openSliderPop
            ? <SliderPop data={this.props.data} addChannel={this.props.addChannel} removeChannel={this.props.removeChannel}/>
            : null
          }
      </ReactCSSTransitionGroup>
    )
  }
}

export default Slider;

