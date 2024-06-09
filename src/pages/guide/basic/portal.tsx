import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>自由节点</h1>
<p>当我们需要创建一个模态框时，我们更希望把弹窗渲染到 body 中，这时，我们可以创建一个自由节点。</p><pre lang="Jsx" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content tb-color-content-highlight"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} createSignal {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/core'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} createProtal {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/platform-browser'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;number =&nbsp;<span class="tb-hl-function">createSignal</span>(<span class="tb-hl-number">0</span>)</div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">App</span>() {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;Modal =&nbsp;<span class="tb-hl-keyword">function</span>&nbsp;(props) {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">createPortal</span>(() =&gt; {'{'}</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">class</span>="<span class="tb-hl-attr-value">modal</span>"&gt;parent data is {'{'}props.text{'}'}&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}, document.body)</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div</span>&gt;data is {'{'}<span class="tb-hl-function">number</span>(){'}'}&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line-emphasize tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-class-name">Modal</span><span class="tb-hl-tag">&nbsp;</span><span class="tb-hl-attr-name">text</span>={'{'}<span class="tb-hl-function">number</span>(){'}'}/&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">Jsx</span></div></pre></div>
    )
  }
}