import { Link } from '@viewfly/router'
import { withScopedCSS } from '@viewfly/scoped-css'

import css from './banner.module.scss'

export function Banner() {
  return withScopedCSS(css, () => {
    return (
      <div css="banner" class="ui-container-fluid">
        <h1 css="name">Viewfly</h1>
        <div css="slogan">简单、符合直觉的 JavaScript 框架</div>
        <p css="desc">🚀  回到初心，坚守熟悉的语法，我们不做问题的制造者</p>
        <p>
          <Link css="btn btn-quick-start" to="/guide" role="button">快速上手</Link>
          &nbsp;&nbsp;&nbsp;
          <Link css="btn btn-install" to="/guide/start" role="button">安 装</Link>
        </p>
      </div>
    )
  })
}
