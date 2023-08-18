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
<h2>useStaticRef()</h2>
<tb-alert data-type="default" class="tb-alert tb-alert-default">
  <div>useStaticRef 是为了弥补 core 包内的 Ref 只支持回调函数的使用方式。</div>
</tb-alert>
<p>useStaticRef 可以在组件渲染完成时，通过 current 属性获取到对应的组件实现或 DOM 节点。</p><pre lang="Jsx" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} onMounted {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/core'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} useStaticRef {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/hooks'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">App</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;ref =&nbsp;<span class="tb-hl-function">useStaticRef</span>()</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-function">onMounted</span>(() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;console.<span class="tb-hl-function">log</span>(ref.current)&nbsp;<span class="tb-hl-comment">// DIV Element</span></div><div class="tb-code-line">&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; (</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">ref</span>={'{'}ref{'}'}&gt;test&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;)</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">Jsx</span></div></pre>
<p><br/></p></div>
    )
  }
}