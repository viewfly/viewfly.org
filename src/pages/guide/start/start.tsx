import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>安装</h1>
<tb-alert data-type="default" class="tb-alert tb-alert-default">
  <div><span style="font-size:14px">Viewfly 的官方脚手架正在开发中，不过我们完全可以自己通过任何打包构建工具运行我们的项目。</span><br/></div>
</tb-alert>
<p>通过 &nbsp;npm 安装 Viewfly。</p><pre lang="" theme="null" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">npm install @viewfly/core @viewfly/platform-browser</div></div><span class="tb-pre-lang"></span></div></pre>
<p>我们推荐你在项目中使用 tsx，在 tsconfig.json 中添加如下配置：</p><pre lang="JSON" theme="null" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-attr-name">"compilerOptions"</span>: {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-attr-name">"jsx"</span>:&nbsp;<span class="tb-hl-string">"react-jsx"</span>,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-attr-name">"jsxImportSource"</span>:&nbsp;<span class="tb-hl-string">"@viewfly/core"</span></div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">JSON</span></div></pre>
<p><br/></p></div>
    )
  }
}