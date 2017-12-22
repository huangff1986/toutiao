import React, {Component} from 'react';
import _ from 'lodash'
import './History.css'

let data = [
  '原始人类',
  '在一起时间久了',
  '非洲原始人',
  '街霸5小孩',
  'react',
  'gj',
  '街霸5',
  '可视化编程',
  'shuangxiashiyan',
  '街霸5佳美',
  '邓丽君',
  'psv'
]

class History extends Component {
  constructor(props){
    super(props);
    this.state = {
      history: data,
      showAll: false,
      del: false
    }
    this.handleShowAll = this.handleShowAll.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleDelItem = this.handleDelItem.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleShowAll(event) {
    this.setState({
      showAll: !this.state.showAll
    })
  }

  handleDel(event) {
    this.setState({
      showAll: true,
      del: !this.state.del
    })
  }

  handleDone(event) {
    this.setState({
      del: false,
      showAll: false
    })
  }

  handleDelItem(event) {
    let itemIndex = event.target.parentNode.dataset.key;
    let history = [];
    for(let i = 0; i < this.state.history.length; i++ ){
        if(i != itemIndex ){
          history.push(this.state.history[i])
        }
    };
    console.log(itemIndex)
    this.setState({
      history: history
    })
  }
  render() {
    return (
      <div className='History'>
        <div className='History__HD'>
          <div className='History__title' onTouchStart={this.handleShowAll}>
            <span className='name'>历史记录</span>
            <svg className={this.state.showAll ? 'arrow active' : 'arrow'} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2103" ><defs><style type="text/css"></style></defs><path d="M502.455 357.594l-238.088 238.088 29.76 29.76 208.328-208.332 208.332 208.332 29.759-29.76-208.329-208.33z" p-id="2104"></path></svg>
          </div>
          {
            this.state.del 
            ? <span className='History__del--done' onTouchStart={this.handleDone}>完成</span> 
            : <svg className='History__del' onTouchStart={this.handleDel} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2862"><defs><style type="text/css"></style></defs><path d="M832 341.504l0-42.496c0-23.552-18.944-42.496-42.496-42.496L234.496 256.512c-23.552 0-42.496 18.944-42.496 42.496l0 42.496c0 11.776-9.728 21.504-21.504 21.504l0 0c-11.776 0-21.504-9.728-21.504-21.504l0-42.496c0-47.104 38.4-85.504 85.504-85.504l106.496 0 0-42.496c0-23.552 18.944-42.496 42.496-42.496l256 0c23.552 0 42.496 18.944 42.496 42.496l0 42.496 106.496 0c47.104 0 85.504 38.4 85.504 85.504l0 42.496c0 11.776-9.728 21.504-21.504 21.504l0 0C841.728 362.496 832 353.28 832 341.504zM631.296 170.496 392.704 170.496c-4.608 0-8.704 4.096-8.704 8.704l0 33.792 256 0L640 179.2C640 174.592 635.904 170.496 631.296 170.496zM448 426.496 448 768l-42.496 0L405.504 426.496c0-11.776 9.728-21.504 21.504-21.504l0 0C438.272 405.504 448 414.72 448 426.496zM618.496 426.496 618.496 768l-42.496 0L576 426.496c0-11.776 9.728-21.504 21.504-21.504l0 0C609.28 405.504 618.496 414.72 618.496 426.496zM277.504 810.496c0 23.552 18.944 42.496 42.496 42.496l384 0c23.552 0 42.496-18.944 42.496-42.496L746.496 384c0-11.776 9.728-21.504 21.504-21.504l0 0c11.776 0 21.504 9.728 21.504 21.504l0 426.496c0 47.104-38.4 85.504-85.504 85.504l-384 0c-47.104 0-85.504-38.4-85.504-85.504L234.496 384c0-11.776 9.728-21.504 21.504-21.504l0 0c11.776 0 21.504 9.728 21.504 21.504L277.504 810.496z" p-id="2863"></path></svg>
          }
        </div>
        <div className='History__BD'>
          <ul className='History__list'> 
            {
              this.state.history.map((value,index) => {
                if(!this.state.showAll && index>3){
                  return
                }
                return (
                  <li className='History__item' key={index} data-key={index}>
                    <span>{value}</span>
                    {
                      this.state.del 
                      ? <svg className='btn_del' onTouchStart={this.handleDelItem} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3534" ><defs><style type="text/css"></style></defs><path d="M834.661 722.663l-272.724-272.721 271.115-271.123c10.207-10.189 10.207-26.719 0-36.906-10.189-10.189-26.704-10.189-36.909 0l-271.117 271.117-272.127-272.128c-10.255-10.255-26.873-10.255-37.125 0-10.255 10.255-10.255 26.891 0 37.132l272.127 272.124-269.994 269.994c-10.189 10.189-10.189 26.719 0 36.925 10.207 10.187 26.719 10.187 36.909 0l269.995-270.004 272.723 272.721c10.254 10.255 26.87 10.255 37.132 0 10.253-10.254 10.253-26.868 0-37.132z" p-id="3535"></path></svg>
                      : null
                    }
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default History;