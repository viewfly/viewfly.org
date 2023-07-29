import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>脚手架</h1>
<h2>安装</h2>
<p>通过 &nbsp;npm 安装 Viewfly 的脚手架。</p><pre lang="" theme="starry" class="tb-pre tb-pre-hide-line-number"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">npm install @viewfly/cli -g</div></div><span class="tb-pre-lang"></span></div></pre>
<p>cli 创建的模板支持以下功能</p>
<ul>
  <li class="tb-list-item">开发语言：TypeScript/JavaScript</li>
  <li class="tb-list-item">样式表：sass/less/css</li>
</ul>
<h2>使用</h2><pre lang="" theme="starry" class="tb-pre tb-pre-hide-line-number"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"># 创建项目</div><div class="tb-code-line">viewfly new my-app</div><div class="tb-code-line"># 进入项目目录</div><div class="tb-code-line">cd my-app</div><div class="tb-code-line"># 安装依赖</div><div class="tb-code-line">npm install</div><div class="tb-code-line"># 启动项目</div><div class="tb-code-line">npm start</div></div><span class="tb-pre-lang"></span></div></pre></div>
    )
  }
}