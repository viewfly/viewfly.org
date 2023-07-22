import { Link } from '@viewfly/router'
import { withScopedCSS } from '@viewfly/scoped-css'

import css from './banner.scoped.scss'

export function Banner() {
  return withScopedCSS(css, () => {
    return (
      <div class="banner ui-container-fluid">
        <div class="bg">
          <div class="arc-group">
            <div class="max"/>
            <div class="max"/>
            <div class="max"/>
            <div class="min"/>
            <div class="min"/>
            <div class="min"/>
            <div class="min"/>
            <div class="min"/>
            <div class="min"/>
          </div>
        </div>
        <div class="ui-container content">
          <h1 class="name">Viewfly</h1>
          <div class="slogan">简单、符合直觉的 JavaScript 框架</div>
          <p class="desc">🚀  回到初心，坚守熟悉的语法，我们不做问题的制造者</p>
          <p>
            <Link class="btn btn-quick-start" to="/guide" role="button">快速上手</Link>
            &nbsp;&nbsp;&nbsp;
            <Link class="btn btn-install" to="/guide/start" role="button">安 装</Link>
          </p>
        </div>
      </div>
    )
  })
}
