import css from './guide.module.scss'
import { scopedCss } from '@viewfly/scoped-css'

import Intro from './start/intro'
import { Subject } from '@tanbo/stream'
import { provide } from '@viewfly/core'
import { ViewUpdateInjectionToken } from './injection-tokens'
import { AnchorLinks } from './anchor-links'

export const Guide = scopedCss(css, () => {

  const onViewChange = new Subject()

  provide({
    provide: ViewUpdateInjectionToken,
    useValue: onViewChange
  })
  return () => {
    return (
      <div class="ui-container" css="page">
        <div css="nav">
          <nav>
            <h3>起步</h3>
            <ul>
              <li>
                <a css="active" href="">简介</a>
              </li>
              <li>
                <a href="">快速上手</a>
              </li>
            </ul>
            <h3>基础</h3>
            <ul>
              <li>
                <a href="">组件</a>
              </li>
              <li>
                <a href="">属性</a>
              </li>
              <li>
                <a href="">状态管理</a>
              </li>
              <li>
                <a href="">状态组合与监听</a>
              </li>
              <li>
                <a href="">生命周期</a>
              </li>
              <li>
                <a href="">依赖注入</a>
              </li>
              <li>
                <a href="">路由</a>
              </li>
              <li>
                <a href="">子应用</a>
              </li>
            </ul>
            <h3>工具</h3>
            <ul>
              <li>
                <a href="">脚手架</a>
              </li>
            </ul>
            <h3>高级</h3>
            <ul>
              <li>
                <a href="">渲染机制</a>
              </li>
              <li>
                <a href="">测试</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="doc-content" css="doc-content">
          <Intro/>
          <p css="ad">官方文档由 Textbus 编写</p>
        </div>
        <div css="links">
          <AnchorLinks/>
        </div>
      </div>
    )
  }
})
