import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Footer.css'
class Footer extends Component {
  render() {
    return (
      <footer className='common_footer'>
        <div className='common_footer__con'>
          <span className='common_footer__a'>
            <NavLink to='/' exact activeClassName='common_footer__a--active'>
              <svg className="common_footer__icon first" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3066" ><defs><style type="text/css"></style></defs><path d="M983.794811 516.520967l-162.581865-162.582889L821.212946 100.749612 698.437691 100.749612l0 130.415258L525.37717 58.103326c-3.597945-3.587712-8.453533-5.613858-13.519921-5.613858-5.067412 0-9.942443 2.026146-13.508665 5.613858L40.213375 516.216022c-5.472642 5.494131-7.115048 13.703093-4.14439 20.859074 2.949168 7.133468 9.921977 11.795651 17.664312 11.795651L181.128779 548.870746l0 403.526473c0 10.558473 8.553817 19.114336 19.113313 19.114336l183.298699 0L383.540791 713.237257l256.926604 0 0 258.274298 183.745884 0c10.559497 0 19.11229-8.55484 19.11229-19.114336L843.325569 639.273708l0.264013-90.118484 126.687354 0c7.721869 0 14.693654-4.663206 17.674545-11.797697C990.88837 530.202571 989.249033 521.974166 983.794811 516.520967" p-id="6899"></path></svg>
              <span className='common_footer__word'>首页</span>
            </NavLink>
          </span>
          <span className='common_footer__a'>
            <NavLink to='/xigua' activeClassName='common_footer__a--active'>
              <svg className="common_footer__icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4358"><defs><style type="text/css"></style></defs><path d="M832.994207 449.299917L266.44331 84.654234C141.529662 4.257038 146.273219 133.062834 146.273219 133.062834V891.545314s-2.189334 122.602684 103.628459 54.490082L837.251244 568.010453s93.898088-55.463119-4.257037-118.710536z" p-id="4359"></path></svg>
              <span className='common_footer__word'>西瓜视频</span>
            </NavLink>
          </span>
          <span className='common_footer__a'>
            <NavLink to='/weitoutiao' activeClassName='common_footer__a--active'>
              <svg className="common_footer__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5024"><defs><style type="text/css"></style></defs><path d="M551.384615 849.841231c-37.021538 0-73.176615-2.599385-108.150153-7.876923a573.991385 573.991385 0 0 1-321.378462 133.356307c60.100923-52.696615 99.564308-125.479385 106.417231-206.139077C90.190769 691.830154 0 566.350769 0 425.196308 0 189.833846 246.862769 0 551.384615 0s551.384615 189.833846 551.384616 425.196308c0 234.732308-246.862769 424.566154-551.384616 424.566154z" p-id="7966"></path></svg>
              <span className='common_footer__word'>微头条</span>
            </NavLink>
          </span>
          <span className='common_footer__a'>
            <NavLink to='/xiaoshipin' activeClassName='common_footer__a--active'>
              <svg className="common_footer__icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6220" ><defs><style type="text/css"></style></defs><path d="M851 964H173c-62.4 0-113-50.6-113-113V173c0-62.4 50.5-113 112.9-113H851c62.4 0 113 50.6 113 113v678c0 62.4-50.6 113-113 113z m56.5-791c0-31.2-25.2-56.5-56.4-56.5H173c-31.2 0-56.5 25.3-56.5 56.5v678c0 31.2 25.3 56.5 56.5 56.5h678.1c31.1 0 56.4-25.2 56.5-56.3V173zM670.3 532.2L404.6 705.3c-14.5 9.5-33.8 4.6-33.8-23.1V341.5c0-27.8 18-31.6 33.8-23.1l265.7 173.2c11.2 7.2 14.5 22.1 7.4 33.3-2 2.9-4.5 5.4-7.4 7.3z" fill="" p-id="6221"></path></svg>
              <span className='common_footer__word'>小视频</span>
            </NavLink>
          </span>
        </div>
      </footer>
    )
  }
}

export default Footer;