import { scopedCSS } from '@viewfly/scoped-css'

import css from './banner.module.scss'

export const Banner = scopedCSS(css, () => {
  return () => {
    return (
      <div css="banner" class="ui-container-fluid">
        <div css="slogan">简单、符合直觉的 JavaScript 框架</div>
        <p css="desc">🚀  回到初心，坚守熟悉的语法，我们不做问题的制造者</p>
        <p>
          <a css="btn btn-quick-start" href="#" role="button">快速上手</a>
          &nbsp;&nbsp;&nbsp;
          <a css="btn btn-install" href="#" role="button">安 装</a>
        </p>
      </div>
    )
  }
})
