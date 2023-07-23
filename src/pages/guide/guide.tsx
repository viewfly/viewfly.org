import { withScopedCSS } from '@viewfly/scoped-css'
import { BehaviorSubject } from '@tanbo/stream'
import { provide } from '@viewfly/core'
import { Link, RouterOutlet } from '@viewfly/router'

import css from './guide.scoped.scss'
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
      <div class="ui-container page">
        <div class={['nav', { active: showNavBtn() }]}>
          <nav>
            <h3>起步</h3>
            <ul>
              <li>
                <Link to="./" active="active" exact>简介</Link>
              </li>
              <li>
                <Link to="./start" active="active">快速上手</Link>
              </li>
            </ul>
            <h3>基础</h3>
            <ul>
              <li>
                <Link to="./component" active="active">组件及状态管理</Link>
              </li>
              <li>
                <Link to="./life-cycle" active="active">生命周期</Link>
              </li>
              <li>
                <Link to="./router" active="active">路由 <i class="tag">dev</i></Link>
              </li>
              <li>
                <Link to="./fork" active="active">子应用</Link>
              </li>
              <li>
                <Link to="./scoped-css" active="active">模块化 CSS</Link>
              </li>
              <li>
                <Link to="./di" active="active">依赖注入</Link>
              </li>
              <li>
                <Link to="./hooks" active="active">更多 hooks</Link>
              </li>
            </ul>
            <h3>工具</h3>
            <ul>
              <li>
                <Link to="./cli" active="active">脚手架 <i class="tag">dev</i></Link>
              </li>
            </ul>
            <h3>高级</h3>
            <ul>
              <li>
                <Link to="./renderer" active="active">渲染及性能优化</Link>
              </li>
              <li>
                <Link to="./test" active="active">单元测试</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="doc-content doc-content">
          <RouterOutlet config={[
            {
              name: '',
              asyncComponent: () => import('./start/intro').then(m => m.default)
            },
            {
              name: 'start',
              asyncComponent: () => import('./start/start').then(m => m.default)
            },
            {
              name: 'component',
              asyncComponent: () => import('./docs/component').then(m => m.default)
            },
            {
              name: 'life-cycle',
              asyncComponent: () => import('./docs/life-cycle').then(m => m.default)
            },
            {
              name: 'di',
              asyncComponent: () => import('./docs/di').then(m => m.default)
            },
            {
              name: 'router',
              asyncComponent: () => import('./docs/router').then(m => m.default)
            },
            {
              name: 'fork',
              asyncComponent: () => import('./docs/fork').then(m => m.default)
            },
            {
              name: 'cli',
              asyncComponent: () => import('./docs/cli').then(m => m.default)
            },
            {
              name: 'scoped-css',
              asyncComponent: () => import('./docs/scoped-css').then(m => m.default)
            },
            {
              name: 'hooks',
              asyncComponent: () => import('./docs/hooks').then(m => m.default)
            },
            {
              name: 'renderer',
              asyncComponent: () => import('./docs/renderer').then(m => m.default)
            },
            {
              name: 'test',
              asyncComponent: () => import('./docs/test').then(m => m.default)
            }
          ]}/>
          <p class="ad">官方文档由 Textbus 编写</p>
        </div>
        <div class="links">
          <AnchorLinks/>
        </div>
      </div>
    )
  })
}
