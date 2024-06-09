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
      <div class="xnote-h1">扩展 Hooks</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>hooks 包内提供了 Viewfly 官网提供的一系列帮助开发者更方便开发应用的 hooks，你可以自由选择使用。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">useProduce()</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>useProduce 提供了复杂对象的响应式管理能力。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'} useProduce {'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/hooks'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;[signal, update] =&nbsp;<span class="hljs-title function_">useProduce</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">name</span>:&nbsp;<span class="hljs-string">'Bob'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">age</span>:&nbsp;<span class="hljs-number">25</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 获取数据</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">signal</span>().<span class="hljs-property">name</span>)&nbsp;<span class="hljs-comment">// Bob</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">// 更新数据</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">update</span>(<span class="hljs-function"><span class="hljs-params">draft</span>&nbsp;=&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;draft.<span class="hljs-property">name</span>&nbsp;=&nbsp;<span class="hljs-string">'Jack'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">signal</span>().<span class="hljs-property">name</span>)&nbsp;<span class="hljs-comment">// Jack</span></span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><br/></div>
    </div>
  </div>
</div></div>
    )
  }
}