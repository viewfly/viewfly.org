import { scopedCss } from '@viewfly/scoped-css'

import logo from '../../assets/logo.svg'
import css from './header.module.scss'

export const Header = scopedCss(css, () => {
  return () => {
    return (
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" css="logo-link" href="#">
            <img css="logo" src={logo} alt="log"/>
            Viewfly
          </a>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="#">首页</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">开发者文档</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">脚手架</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#">
                  生态
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">组件库</a></li>
                  <li><a class="dropdown-item" href="#">hooks</a></li>
                  <li><a class="dropdown-item" href="#">其它</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">关于</a>
              </li>
            </ul>
            <form class="d-flex ps-4 pe-4 justify-content-end" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" target="_blank" href="https://github.com/viewfly/viewfly">
                  <i class="bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})
