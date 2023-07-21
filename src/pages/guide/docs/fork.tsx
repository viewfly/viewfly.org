import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>子应用</h1>
<p>当我们需要临时创建一个应用，但又需要继承当前上下文时，可以使用 fork 函数创建子应用，并在合适的时机渲染出来。如对话框、消息提示等。</p><pre lang="Jsx" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">Dialog</span>(props) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">button&nbsp;</span><span class="tb-hl-attr-name">onClick</span>={'{'}props.close{'}'}&gt;close&lt;/<span class="tb-hl-tag">button</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">YourComponent</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">close</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;childApp.<span class="tb-hl-function">destroy</span>()</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;childApp =&nbsp;<span class="tb-hl-function">fork</span>(&lt;<span class="tb-hl-class-name">Dialog</span><span class="tb-hl-tag">&nbsp;</span><span class="tb-hl-attr-name">close</span>={'{'}close{'}'}/&gt;)</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">showDialog</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;childApp.<span class="tb-hl-function">mount</span>(document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'dialog-container'</span>))</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;&lt;<span class="tb-hl-tag">button&nbsp;</span><span class="tb-hl-attr-name">onClick</span>={'{'}showDialog{'}'}&gt;button&lt;/<span class="tb-hl-tag">button</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">Jsx</span></div></pre></div>
    )
  }
}