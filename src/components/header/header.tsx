import { onMounted, useSignal } from '@viewfly/core'
import { withScopedCSS } from '@viewfly/scoped-css'

import logo from '../../assets/logo.svg'
import css from './header.module.scss'
import { Link } from '@viewfly/router'

export const showNavBtn = useSignal(false)

export function Header() {
  onMounted(() => {
    const fn = function () {
      showNavBtn.set(false)
    }
    document.addEventListener('click', fn)
    return () => {
      document.removeEventListener('click', fn)
    }
  })
  return withScopedCSS(css, () => {
    return (
      <header css="header">
        <div css="nav" class="ui-container">
          <div css="left">
            <Link css="logo-link" to="/">
              <img css="logo" src={logo} alt="log"/>
              <span>Viewfly</span>
            </Link>
            <ul css="nav-links">
              <li><Link to="/" active={css.active} exact>首页</Link></li>
              <li><Link to="/guide" active={css.active}>开发者文档</Link></li>
              <li><a href="/guide/cli">脚手架</a></li>
            </ul>
          </div>
          <div css="right">
            <ul css="nav-links">
              <li><a href="https://github.com/viewfly/viewfly" target="_blank" css="icon-github"><i class="bi-github"></i></a></li>
              <li css="nav-btn">
                <button onClick={(ev) => {
                  ev.stopPropagation()
                  showNavBtn.set(!showNavBtn())
                }} type="button"><i class="bi bi-list-ul"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  })
}
