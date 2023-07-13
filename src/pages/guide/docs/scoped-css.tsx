import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>模块化 CSS</h1>
<p>在应用开发中，模块化 css 是可以帮助我们解决 class 命名冲突的问题，要使用模块化 css，需要 css-loader 的模块化能力，或者其它类似解决方案。</p>
<p>在组件中使用模块样式，只需要调用 withScopedCSS 函数，并传入样式表映射对象（由 css-loader 自动生成）和渲染函数，同时需要使用 css 来编写 class 名，原来有 class 也可以保留。但是为全局样式。</p><pre lang="CSS" theme="null" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-selector">.box</span>&nbsp;{'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-attr-name">width</span>: 200px;</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-attr-name">height</span>: 40px;</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-attr-name">color</span>: red;</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">CSS</span></div></pre><pre lang="Jsx" theme="null" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} withScopedCSS {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/scoped-css'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;css&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'./app.module.css'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">App</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">withScopedCss</span>(css, () =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;&lt;<span class="tb-hl-tag">div&nbsp;</span><span class="tb-hl-attr-name">css</span>="<span class="tb-hl-attr-value">box</span>"&gt;xxx&lt;/<span class="tb-hl-tag">box</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">Jsx</span></div></pre></div>
    )
  }
}