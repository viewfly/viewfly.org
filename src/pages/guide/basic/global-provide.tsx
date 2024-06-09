import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><div data-comopnent="RootComponent" class="xnote-root">
  <div data-placeholder="" class="xnote-content">
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h1">全局服务</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在我们创建应用时，有时需要给整个应用在最顶层提供一些全局的对象或服务。你可以应用在未挂载前，通过 Viewfly 实例的 provide 方法注册全局服务。</div>
    </div>
    <div data-lang="Tsx" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;<span class="hljs-title class_">GlobalConfig</span>&nbsp;=&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">InjectionToken</span>(<span class="hljs-string">'GlobalConfig'</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;globalConfig =&nbsp;<span class="hljs-title function_">inject</span>(<span class="hljs-title class_">GlobalConfig</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(globalConfig.<span class="hljs-property">userName</span>)&nbsp;<span class="hljs-comment">// Jack</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}...{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;app =&nbsp;<span class="hljs-title function_">createApp</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span>/&gt;</span></span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">app.<span class="hljs-title function_">provide</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">provide</span>:&nbsp;<span class="hljs-title class_">GlobalConfig</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">useVlaue</span>: {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">userName</span>:&nbsp;<span class="hljs-string">'Jack'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">userId</span>:&nbsp;<span class="hljs-string">'xxxx-xxxx-xxxx-xxxx'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">app.<span class="hljs-title function_">mount</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">'app'</span>))</span></div></pre><span class="xnote-source-code-lang">Tsx/Jsx</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>全局服务可以在事个应用的所有组件中访问，当然，也可以在某一个组件提供局部上下文。可参考依赖注入章节，关于服务替换的相关文档。</div>
    </div>
  </div>
</div></div>
    )
  }
}