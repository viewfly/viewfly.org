import { withScopedCSS } from '@viewfly/scoped-css'
import { BehaviorSubject } from '@tanbo/stream'
import { provide } from '@viewfly/core'
import { Link, RouterOutlet } from '@viewfly/router'

import css from './guide.module.scss'
import { ViewUpdateInjectionToken } from './injection-tokens'
import { AnchorLinks } from './anchor-links'
import { showNavBtn } from '../../components/header/header'

export function Guide() {
  const onViewChange = new BehaviorSubject<HTMLElement | null>(null)

  provide({
    provide: ViewUpdateInjectionToken,
    useValue: onViewChange
  })
  return withScopedCSS(css, () => {
    return (
      <div class="ui-container" css="page">
        <div css={['nav', { active: showNavBtn() }]}>
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
                <Link to="./router" active={css.active}>路由 <i css="tag">dev</i></Link>
              </li>
              <li>
                <Link to="./fork" active={css.active}>子应用</Link>
              </li>
              <li>
                <Link to="./scoped-css" active={css.active}>模块化 CSS</Link>
              </li>
              <li>
                <Link to="./di" active={css.active}>依赖注入</Link>
              </li>
              <li>
                <Link to="./hooks" active={css.active}>更多 hooks</Link>
              </li>
            </ul>
            <h3>工具</h3>
            <ul>
              <li>
                <Link to="./cli" active={css.active}>脚手架 <i css="tag">dev</i></Link>
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
              component: import('./start/intro').then(m => m.default)
            },
            {
              name: 'start',
              component: import('./start/start').then(m => m.default)
            },
            {
              name: 'component',
              component: import('./docs/component').then(m => m.default)
            },
            {
              name: 'life-cycle',
              component: import('./docs/life-cycle').then(m => m.default)
            },
            {
              name: 'di',
              component: import('./docs/di').then(m => m.default)
            },
            {
              name: 'router',
              component: import('./docs/router').then(m => m.default)
            },
            {
              name: 'fork',
              component: import('./docs/fork').then(m => m.default)
            },
            {
              name: 'cli',
              component: import('./docs/cli').then(m => m.default)
            },
            {
              name: 'scoped-css',
              component: import('./docs/scoped-css').then(m => m.default)
            },
            {
              name: 'hooks',
              component: import('./docs/hooks').then(m => m.default)
            },
            {
              name: 'renderer',
              component: import('./docs/renderer').then(m => m.default)
            },
            {
              name: 'test',
              component: import('./docs/test').then(m => m.default)
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
