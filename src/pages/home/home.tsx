import { Banner } from '../../components/banner/banner'
import { withScopedCSS } from '@viewfly/scoped-css'

import css from './home.module.scss'

export function Home() {
  return withScopedCSS(css, () => {
    return (
      <>
        <Banner/>
        <div css="desc">
          <div class="ui-container">
            <div class="ui-row">
              <div class="ui-col-sm-12 ui-col-lg-6">
                <h3>快速</h3>
                <p>在 JavaScript 框架基准测试中，性能超过 Angular 和 React</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <h3>类型安全</h3>
                <p>完全的 TypeScript 支持，帮助你更简单的完成应用开发</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <h3>符合直觉</h3>
                <p>没有黑魔法，没有闭包陷阱，代码会按你的预期执行</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <h3>简单</h3>
                <p>内核只有 10 个 API，不需要很多的经验，一样能快速上手</p>
              </div>
            </div>
          </div>
        </div>
        <div class="ui-container-fluid" css="ad"></div>
      </>
    )
  })
}
