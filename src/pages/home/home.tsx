import { Banner } from '../../components/banner/banner'
import { withScopedCSS } from '@viewfly/scoped-css'

import css from './home.module.scss'

import haubi from './huabi.png'
import cs from './38655348.jpeg'
import cg from './46988668.jpeg'

export function Home() {
  return withScopedCSS(css, () => {
    return (
      <>
        <Banner/>
        <div css="desc">
          <div class="ui-container">
            <div class="ui-row" css="group">
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div css="icon">
                  <i class="bi bi-lightning-charge-fill"></i>
                </div>
                <h3>快速</h3>
                <p>在 JavaScript 框架基准测试中，性能超过 Angular 和 React</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div css="icon">
                  <i class="bi bi-shield-fill-check"></i>
                </div>
                <h3>类型安全</h3>
                <p>完整的 TypeScript 支持，帮助你更简单的完成应用开发</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div css="icon">
                  <i class="bi bi-brightness-high-fill"></i>
                </div>
                <h3>符合直觉</h3>
                <p>没有黑魔法，没有闭包陷阱，代码会按你的预期执行</p>
              </div>
              <div class="ui-col-sm-12 ui-col-lg-6">
                <div css="icon">
                  <i class="bi bi-cursor-fill"></i>
                </div>
                <h3>简单</h3>
                <p>内核只有 10 个 API，不需要很多的经验，一样能快速上手</p>
              </div>
            </div>
          </div>
        </div>
        <div class="ui-container" css="stages">
          <div>
            <h3>12 KB</h3>
            <p>Minify+Gzip</p>
          </div>
          <div>
            <h3>Function Based</h3>
            <p>拥抱函数组件</p>
          </div>
          <div>
            <h3>No closure</h3>
            <p>没有闭包陷阱</p>
          </div>
          <div>
            <h3>CSS Modules</h3>
            <p>支持模块化 CSS</p>
          </div>
          <div>
            <h3>Router</h3>
            <p>官方路由支持</p>
          </div>
          <div>
            <h3>CLI</h3>
            <p>官方提供脚手架</p>
          </div>
          <div>
            <h3>SSR</h3>
            <p>支持服务端渲染</p>
          </div>
        </div>
        <div class="ui-container-fluid" css="authors">
          <div class="ui-container">
            <h2>Contributors</h2>
            <div css="author-list">
              <div css="author-item">
                <div css="author-info">
                  <div>
                    <img src={haubi} alt=""/>
                  </div>
                  <h3>画笔</h3>
                  <p>前端开发老鸟，热爱开源，爱折腾，Textbus 富文本框架作者。</p>
                  <p>Viewfly 为其最新力作，旨在为开发者提供更简单、更轻巧、更易使用前端基础框架。</p>
                </div>
              </div>
              <div css="author-item">
                <div css="author-info">
                  <div>
                    <img src={cs} alt=""/>
                  </div>
                  <h3>TinyCricetus</h3>
                  <p></p>
                </div>
              </div>
              <div css="author-item">
                <div css="author-info">
                  <div>
                    <img src={cg} alt=""/>
                  </div>
                  <h3>GordonHU-LB</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })
}
