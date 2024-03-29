import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>扩展 Hooks</h1>
<p>hooks 包内提供了 Viewfly 官网提供的一系列帮助开发者更方便开发应用的 hooks，你可以自由选择使用。</p>
<h2>useProduce()</h2>
<p>useProduce 提供了复杂对象的响应式管理能力。</p><pre lang="JavaScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} useProduce {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/hooks'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;[signal, update] =&nbsp;<span class="tb-hl-function">useProduce</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;name:&nbsp;<span class="tb-hl-string">'Bob'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;age:&nbsp;<span class="tb-hl-number">25</span></div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 获取数据</span></div><div class="tb-code-line">console.<span class="tb-hl-function">log</span>(<span class="tb-hl-function">signal</span>().name)&nbsp;<span class="tb-hl-comment">// Bob</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-comment">// 更新数据</span></div><div class="tb-code-line"><span class="tb-hl-function">update</span>(draft =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;draft.name =&nbsp;<span class="tb-hl-string">'Jack'</span></div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line">console.<span class="tb-hl-function">log</span>(<span class="tb-hl-function">signal</span>().name)&nbsp;<span class="tb-hl-comment">// Jack</span></div></div><span class="tb-pre-lang">JavaScript</span></div></pre>
<p><br/></p></div>
    )
  }
}