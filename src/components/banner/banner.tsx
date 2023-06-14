import { scopedCss } from '@viewfly/scoped-css'

import css from './banner.module.scss'

export const Banner = scopedCss(css, () => {
  return () => {
    return (
      <div css="banner" class="container-fluid bg-warning">
        <div css="slogan">简单、符合直觉的 JavaScript 框架</div>
        <p css="desc">🚀  回到初心，坚守熟悉的语法，我们不做问题的制造者</p>
        <p>
          <a class="btn btn-primary btn-lg" href="#" role="button">快速上手</a>
          &nbsp;&nbsp;&nbsp;
          <a class="btn btn-dark btn-lg" href="#" role="button">安 装</a>
        </p>
      </div>
    )
  }
})
