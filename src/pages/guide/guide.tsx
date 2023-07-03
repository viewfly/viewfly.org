import { scopedCSS } from '@viewfly/scoped-css'
import { BehaviorSubject } from '@tanbo/stream'
import { provide } from '@viewfly/core'
import { Link, RouterOutlet } from '@viewfly/router'

import css from './guide.module.scss'
import { ViewUpdateInjectionToken } from './injection-tokens'
import { AnchorLinks } from './anchor-links'
import Intro from './start/intro'
import Start from './start/start'
import Component from './docs/component'

export const Guide = scopedCSS(css, () => {

  const onViewChange = new BehaviorSubject<HTMLElement | null>(null)

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
                <Link to="./" active={css.active} exact>简介</Link>
              </li>
              <li>
                <Link to="./start" active={css.active}>快速上手</Link>
              </li>
            </ul>
            <h3>基础</h3>
            <ul>
              <li>
                <Link to="./component" active={css.active}>组件及状态管理</Link>
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
          <RouterOutlet config={[
            {
              name: '',
              component: Intro
            },
            {
              name: 'start',
              component: Start
            },
            {
              name: 'component',
              component: Component
            }
          ]}/>
          <p css="ad">官方文档由 Textbus 编写</p>
        </div>
        <div css="links">
          <AnchorLinks/>
        </div>
      </div>
    )
  }
})
