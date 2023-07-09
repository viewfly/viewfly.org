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
<p>通过 &nbsp;npm 安装 Viewfly 的脚手架。</p><pre lang="" theme="null" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">npm install @viewfly/cli -g</div></div><span class="tb-pre-lang"></span></div></pre>
<p>通过命令行创建项目</p><pre lang="" theme="null" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">viewfly -c</div></div><span class="tb-pre-lang"></span></div></pre>
<p>然后根据命令行提示，选择合适的项目模板，即可创建一个 Viewfly 的项目。</p></div>
    )
  }
}