import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    setTimeout(() => {
      subject.next(node as HTMLElement)
    })
  })
  return function() {
    return (
      <div ref={ref}><h1>简介</h1>
<p>Viewfly 是一个数据驱动的 JavaScript 框架，提供了一套简单、符合直觉的 API，帮助你高效的构建富交互的用户界面。</p>
<tb-alert data-type="primary" class="tb-alert tb-alert-primary">
  <div>Viewfly 提倡<strong>回归原生 JavaScript，不创建特殊语法，不改变 JavaScript 语义，不依赖特殊的编译环境</strong>，并坚持用我们熟悉的语法来完成应用的开发。</div>
</tb-alert>
<p>一个最简单的示例如下：</p><pre lang="Jsx" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} useSignal {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/core'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} createApp {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/platform-browser'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">App</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;count =&nbsp;<span class="tb-hl-function">useSignal</span>(<span class="tb-hl-number">0</span>)</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">increment</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;count.<span class="tb-hl-function">set</span>(<span class="tb-hl-function">count</span>() +&nbsp;<span class="tb-hl-number">1</span>)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">button&nbsp;</span><span class="tb-hl-attr-name">onClick</span>={'{'}increment{'}'}&gt;count: {'{'}<span class="tb-hl-function">count</span>(){'}'}&lt;/<span class="tb-hl-tag">button</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-function">createApp</span>(document.<span class="tb-hl-function">getElement</span>(<span class="tb-hl-string">'app'</span>), &lt;<span class="tb-hl-class-name">App</span>/&gt;)</div></div><span class="tb-pre-lang">Jsx</span></div></pre>
<p>从上面的示例，我们可以看出：</p>
<ul>
  <li class="tb-list-item">Viewfly 通过 Signal 管理数据，通过调用获取 Signal 的数据，通过 &nbsp;signal.set 更新数据。</li>
  <li class="tb-list-item">Viewfly 使用 tsx/jsx 描述 UI，并可以声明式的绑定事件和数据。</li>
</ul>
<tb-alert data-type="warning" class="tb-alert tb-alert-warning">
  <div>ℹ️ 我们假定你已基本熟悉 HTML、CSS、JavaScript 和 tsx/jsx 的基本使用，如果你还不熟悉相关的知识，建议你选去了解这些基础知识的基本概念，并能简单的使用。</div>
</tb-alert>
<h2>为什么开发 Viewfly？</h2>
<p><br/></p></div>
    )
  }
}
