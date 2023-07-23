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
<p>通过 &nbsp;npm 安装 Viewfly 的脚手架。</p><pre lang="" theme="starry" class="tb-pre tb-pre-hide-line-number"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">npm install @viewfly/cli -g</div></div><span class="tb-pre-lang"></span></div></pre>
<p>通过命令行创建项目</p><pre lang="" theme="starry" class="tb-pre tb-pre-hide-line-number"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">viewfly new myApp</div></div><span class="tb-pre-lang"></span></div></pre>
<p>然后根据命令行提示，选择合适的项目模板，即可创建一个 Viewfly 的项目。</p>
<h2>第一个应用</h2>
<p>每一个应用都是通过 createApp 函数创建的 Viewfly 实例。在创建实例时，我们会传入一个挂载 Viewfly 实例的根节点和一个组件。Viewfly 会自动把组件的内容渲染到根节点内。</p><pre lang="Jsx" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} createApp {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/platform-browser'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">App</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;number =&nbsp;<span class="tb-hl-function">useSignal</span>(<span class="tb-hl-number">0</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div</span>&gt;{'{'}<span class="tb-hl-function">number</span>(){'}'}&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button type=<span class="tb-hl-string">"button"</span>&nbsp;onClick={'{'}() =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;number.<span class="tb-hl-function">set</span>(<span class="tb-hl-function">number</span>() +&nbsp;<span class="tb-hl-number">1</span>)</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}{'}'}&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点我加&nbsp;<span class="tb-hl-number">1</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="tb-hl-tag">button</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;app =&nbsp;<span class="tb-hl-function">createApp</span>(document.<span class="tb-hl-function">getElement</span>(<span class="tb-hl-string">'app'</span>), &lt;<span class="tb-hl-class-name">App</span>/&gt;)</div></div><span class="tb-pre-lang">Jsx</span></div></pre>
<p>在创建应用时，我们只能传入一个组件，我们把这个组件叫做根组件。一个应用只能有一个根组件，其它的组件只能作为根组件的子组件。</p>
<tb-alert data-type="primary" class="tb-alert tb-alert-primary">
  <div><strong>注意</strong>：Viewfly 在挂载时，会清空根节点内的所有内容，你应该提供一个空的容器来挂载应用。</div>
</tb-alert>
<h2>Viewfly 实例</h2>
<p>在调用 createApp 函数时，会返回一个 Viewfly 的实例。我们可以创建任意多的 Viewfly 实例，这些实例之间都是独立运行的，互相不受干扰。</p><pre lang="Jsx" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} createApp {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/platform-browser'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">App</span>() {'{'}...{'}'}</div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;app1 =&nbsp;<span class="tb-hl-function">createApp</span>(document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'app'</span>), &lt;<span class="tb-hl-class-name">App</span>/&gt;)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">App2</span>() {'{'}...{'}'}</div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;app2 =&nbsp;<span class="tb-hl-function">createApp</span>(document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'app2'</span>), &lt;<span class="tb-hl-class-name">App2</span>/&gt;)</div></div><span class="tb-pre-lang">Jsx</span></div></pre>
<h2>销毁实例</h2>
<p>在有的情况下，我们可能需要手动销毁应用，这只需要调用 destroy() 方法即可。</p><pre lang="JavaScript" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">app.<span class="tb-hl-function">destroy</span>()</div></div><span class="tb-pre-lang">JavaScript</span></div></pre>
<p><br/></p></div>
    )
  }
}