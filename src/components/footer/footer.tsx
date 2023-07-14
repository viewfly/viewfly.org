import { withScopedCSS } from '@viewfly/scoped-css'

import css from './footer.module.scss'
import logo from '../../assets/logo.svg'

export function Footer() {
  return withScopedCSS(css, () => {
    return (
      <footer>
        <div class="ui-container">
          <div class="ui-row">
            <div class="ui-col-sm-6 list">
            </div>
            <div class="ui-col-sm-6 about">
            </div>
            <div class="ui-col-sm-6" css="list">
              <h4>浏览器兼容</h4>
              <ul>
                <li>Chrome</li>
                <li>Firefox</li>
                <li>Safari</li>
                <li>Edge</li>
              </ul>
            </div>
            <div class="ui-col-sm-6">
              <div css="copyright">
                <h4><img src={logo} alt=""/> <span>Viewfly</span></h4>
                <p>遵循 MIT License 开源协议</p>
                <div>Copyright © 2023 画笔</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  })
}
