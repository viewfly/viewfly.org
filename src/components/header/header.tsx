import { scopedCss } from '@viewfly/scoped-css'

import logo from '../../assets/img.png'
import css from './header.module.scss'

export const Header = scopedCss(css, () => {
  return () => {
    return (
      <header css="header" class="ui-container-fluid">
        <div css="left">
          <a css="logo-link" href="#">
            <img css="logo" src={logo} alt="log"/>
            <span>Viewfly</span>
          </a>
        </div>
        <div css="right">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">开发者文档</a></li>
            <li><a href="#">脚手架</a></li>
            <li><a href="#">生态</a></li>
            <li><a href="#"><i class="bi-github"></i></a></li>
          </ul>
        </div>
      </header>
    )
  }
})
