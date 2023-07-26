import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>全局服务</h1>
<p>在我们创建应用时，有时需要给整个应用在最顶层提供一些全局的对象或服务。你可以应用在未挂载前，通过 Viewfly 实例的 provide 方法注册全局服务。</p><pre lang="Jsx" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;GlobalConfig =&nbsp;<span class="tb-hl-keyword">new</span>&nbsp;<span class="tb-hl-class-name">InjectionToken</span>(<span class="tb-hl-string">'GlobalConfig'</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">App</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;globalConfig =&nbsp;<span class="tb-hl-function">inject</span>(GlobalConfig)</div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;console.<span class="tb-hl-function">log</span>(globalConfig.userName)&nbsp;<span class="tb-hl-comment">// Jack</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; {'{'}...{'}'}</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;app =&nbsp;<span class="tb-hl-function">createApp</span>(&lt;<span class="tb-hl-class-name">App</span>/&gt;)</div><div class="tb-code-line"><br/></div><div class="tb-code-line">app.<span class="tb-hl-function">provide</span>({'{'}</div><div class="tb-code-line">&nbsp;&nbsp;provide: GlobalConfig,</div><div class="tb-code-line">&nbsp;&nbsp;useVlaue: {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;userName:&nbsp;<span class="tb-hl-string">'Jack'</span>,</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;userId:&nbsp;<span class="tb-hl-string">'xxxx-xxxx-xxxx-xxxx'</span></div><div class="tb-code-line">&nbsp;&nbsp;{'}'}</div><div class="tb-code-line">{'}'})</div><div class="tb-code-line"><br/></div><div class="tb-code-line">app.<span class="tb-hl-function">mount</span>(document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'app'</span>))</div></div><span class="tb-pre-lang">Jsx</span></div></pre>
<p>全局服务可以在事个应用的所有组件中访问，当然，也可以在某一个组件提供局部上下文。可参考依赖注入章节，关于服务替换的相关文档。</p></div>
    )
  }
}