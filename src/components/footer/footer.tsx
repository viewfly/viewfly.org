import { withScopedCSS } from '@viewfly/scoped-css'

import css from './footer.module.scss'
import logo from '../../assets/logo.svg'

export function Footer() {
  return withScopedCSS(css, () => {
    return (
      <footer class="ui-container-fluid" css="footer">
        <div class="ui-container" css="footer-layout">
          <div css="copyright">
            <h4><img src={logo} alt=""/> <span>Viewfly</span></h4>
            <p>遵循 MIT License 开源协议</p>
            <div>Copyright © 2023 画笔</div>
          </div>
          <div css="footer-info">
            <div css="list">
              <div>浏览器兼容</div>
              <ul>
                <li><i class="bi bi-browser-chrome"></i></li>
                <li><i class="bi bi-browser-safari"></i></li>
                <li><i class="bi bi-browser-firefox"></i></li>
                <li><i class="bi bi-browser-edge"></i></li>
              </ul>
            </div>
            <div css="list">
              <div>友情链接</div>
              <ul>
                <li><a href="https://textbus.io" target="_blank">Textbus 富文本框架</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  })
}
