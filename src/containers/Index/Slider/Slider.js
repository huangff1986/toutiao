import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as tagsActions } from '../../../reducers/tagsReducer'
import Slider from '../../../components/Index/Slider/Slider'

class SliderContainer extends Component {
  constructor(props){
    super(props);
  }

  addChannel(event){
    let index = event.target.dataset.key;
    let data = this.state.data;
    data[index].active = true;
    this.setState({
      data: data
    })
  }

  removeChannel(event){
    let index = event.target.dataset.key;
    let data = this.state.data;
    data[index].active = false;
    this.setState({
      data: data
    })
  }


  componentDidMount() {
      this.props.getAllTags();
  }
  render(){
    return (
      <div className='warpper'>
        <Slider 
          data={this.props.tags} 
          openState={{
            openSliderPop: this.props.openState.openSliderPop
          }}
          handleTouch={{
            openSliderPop: this.props.handleTouch.openSliderPop
          }}
          addChannel={this.props.addChannel}
          removeChannel={this.props.removeChannel}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTags: bindActionCreators(tagsActions.get_all_tags, dispatch),
    addChannel: bindActionCreators(tagsActions.add_tag, dispatch),
    removeChannel: bindActionCreators(tagsActions.delete_tag, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderContainer);