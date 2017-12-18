import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
// 引入页面层
import Index from './Index/Index'
import Xigua from './Xigua/Xigua'
import Weitoutiao from './Weitoutiao/Weitoutiao'
import Xiaoshipin from './Xiaoshipin/Xiaoshipin'

// 引入底部导航
import Footer from '../components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Index}/>
          <Route path='/xigua' component={Xigua}/>
          <Route path='/weitoutiao' component={Weitoutiao}/>
          <Route path='/Xiaoshipin' component={Xiaoshipin}/>
          <Switch>
            <Footer/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App