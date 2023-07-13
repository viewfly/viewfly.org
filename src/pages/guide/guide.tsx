import { withScopedCSS } from '@viewfly/scoped-css'
import { BehaviorSubject } from '@tanbo/stream'
import { provide } from '@viewfly/core'
import { Link, RouterOutlet } from '@viewfly/router'

import css from './guide.module.scss'
import { ViewUpdateInjectionToken } from './injection-tokens'
import { AnchorLinks } from './anchor-links'
import Intro from './start/intro'
import Start from './start/start'
import Component from './docs/component'
import LifeCycle from './docs/life-cycle'
import Di from './docs/di'
import Router from './docs/router'
import Fork from './docs/fork'
import Cli from './docs/cli'
import ScopedCss from './docs/scoped-css'
import Hooks from './docs/hooks'
import Renderer from './docs/renderer'
import Test from './docs/test'

export function Guide() {
  const onViewChange = new BehaviorSubject<HTMLElement | null>(null)

  provide({
    provide: ViewUpdateInjectionToken,
    useValue: onViewChange
  })
  return withScopedCSS(css, () => {
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
                <Link to="./life-cycle" active={css.active}>生命周期</Link>
              </li>
              <li>
                <Link to="./di" active={css.active}>依赖注入</Link>
              </li>
              <li>
                <Link to="./router" active={css.active}>路由</Link>
              </li>
              <li>
                <Link to="./fork" active={css.active}>子应用</Link>
              </li>
              <li>
                <Link to="./scoped-css" active={css.active}>模块化 CSS</Link>
              </li>
              <li>
                <Link to="./hooks" active={css.active}>更多 hooks</Link>
              </li>
            </ul>
            <h3>工具</h3>
            <ul>
              <li>
                <Link to="./cli" active={css.active}>脚手架</Link>
              </li>
            </ul>
            <h3>高级</h3>
            <ul>
              <li>
                <Link to="./renderer" active={css.active}>渲染及性能优化</Link>
              </li>
              <li>
                <Link to="./test" active={css.active}>单元测试</Link>
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
            },
            {
              name: 'life-cycle',
              component: LifeCycle
            },
            {
              name: 'di',
              component: Di
            },
            {
              name: 'router',
              component: Router
            },
            {
              name: 'fork',
              component: Fork
            },
            {
              name: 'cli',
              component: Cli
            },
            {
              name: 'scoped-css',
              component: ScopedCss
            },
            {
              name: 'hooks',
              component: Hooks
            },
            {
              name: 'renderer',
              component: Renderer
            },
            {
              name: 'test',
              component: Test
            }
          ]}/>
          <p css="ad">官方文档由 Textbus 编写</p>
        </div>
        <div css="links">
          <AnchorLinks/>
        </div>
      </div>
    )
  })
}
