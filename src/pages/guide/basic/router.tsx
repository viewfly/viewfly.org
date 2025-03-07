import { inject, createDynamicRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = createDynamicRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><div dir="auto" data-component="RootComponent" style="padding-bottom:40px" class="xnote-root">
  <div data-placeholder="" class="xnote-content">
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h1">路由</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>通过 npm 安装路由模块。</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install @viewfly/router</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">RouterModule</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在任意需要路由的地方使用 RootRouter 组件，一般我在会在根组件上应用。如：</div>
    </div>
    <div data-lang="Tsx" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">RouterModule</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/router'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;(</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span></span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">header</span>&gt;</span>xxx<span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">main</span>&gt;</span>xxx<span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">footer</span>&gt;</span>xxx<span class="hljs-tag">&lt;/<span class="hljs-name">footer</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="language-xml">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">createApp</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span>/&gt;</span></span>).<span class="hljs-title function_">use</span>(<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">RouterModule</span>()).<span class="hljs-title function_">mount</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">'app'</span>))</span></div></pre><span class="xnote-source-code-lang">Tsx/Jsx</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>RouterModule 支持配置一个可选的根路径，当没有配置时，默认为&nbsp;<code class="xnote-code">/</code>，当有配置时，以配置项为准。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>RouterModule 目前只支持 history 模式，hash 模式正在开发中。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">RouterOutlet</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>RouterOutlet 组件用于声明一个动态路由插槽，和要在当前插槽渲染的组件配置表。RouterOutlet 组件只能包含在 RootRouter 内。</div>
    </div>
    <div data-lang="Tsx" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">RouterOutlet</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/router'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;routes = [</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">path</span>:&nbsp;<span class="hljs-string">''</span>,&nbsp;<span class="hljs-comment">// 当没有子路由时渲染 Home</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">Home</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'},</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">path</span>:&nbsp;<span class="hljs-string">'detail'</span>,&nbsp;<span class="hljs-comment">// 当路由为 detail 时渲染 Detail 组件</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">Detail</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'},</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">path</span>:&nbsp;<span class="hljs-string">'list'</span>,&nbsp;<span class="hljs-comment">// 当路由为 list 时，异步加载 List 组件，并渲染</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">asyncComponent</span>:&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;<span class="hljs-keyword">import</span>(<span class="hljs-string">'./path/to/list'</span>).<span class="hljs-title function_">then</span>(<span class="hljs-function"><span class="hljs-params">module</span>&nbsp;=&gt;</span>&nbsp;<span class="hljs-variable language_">module</span>.<span class="hljs-property">List</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'},</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">path</span>:&nbsp;<span class="hljs-string">'*'</span>,&nbsp;<span class="hljs-comment">// 当所有都不匹配时渲染 NotFound 组件，注意这里和 Children 只能二选一，以配置为优先</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">component</span>:&nbsp;<span class="hljs-title class_">NotFound</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;]</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;(</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span></span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">header</span>&gt;</span>xxx<span class="hljs-tag">&lt;/<span class="hljs-name">header</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">main</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">RouterOutlet</span>&nbsp;<span class="hljs-attr">config</span>=<span class="hljs-string">{'{'}routes{'}'}</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当没有匹配到任何路由时，渲染这里。但当路由配置项有 `*` 通配符时，则以配置项为准。</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">RouterOutlet</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">footer</span>&gt;</span>xxx<span class="hljs-tag">&lt;/<span class="hljs-name">footer</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="language-xml">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">Tsx/Jsx</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">Link</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Link 用于在路由跳转功能。支持纯对路径、相对路径、查询参数及高亮匹配。Link 组件默认会生成 a 标签，但可以通过 tag 属性定制。</div>
    </div>
    <div data-lang="HTML" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"/"</span>&gt;</span>跳转到根节点<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"/home"</span>&gt;</span>跳转到根路由下的 home 页面<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"./home"</span>&gt;</span>跳转到当前路由下的 home 页面<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"home"</span>&gt;</span>跳转到当前路由下的 home 页面<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"../home"</span>&gt;</span>跳转到父路由下的 home 页面<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"../../home"</span>&gt;</span>跳转到父级路由的父路由下的 home 页面<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">tag</span>=<span class="hljs-string">"button"</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"./home"</span>&gt;</span>将标签更换为 button&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"./home"</span>&nbsp;<span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span>&gt;</span>在新标签页打开页面<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"./home"</span>&nbsp;<span class="hljs-attr">active</span>=<span class="hljs-string">"active"</span>&gt;</span>当页面地址和跳转路径匹配时，给标签添加 active 的 class<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"/"</span>&nbsp;<span class="hljs-attr">active</span>=<span class="hljs-string">"active"</span>&nbsp;<span class="hljs-attr">exact</span>&gt;</span>严格匹配路由高亮，用于解决匹配到子路由时引起的高亮问题<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span>&nbsp;<span class="hljs-attr">to</span>=<span class="hljs-string">"./home"</span>&nbsp;<span class="hljs-attr">queryParams</span>=<span class="hljs-string">{'{'}{'{'}id:</span>&nbsp;'<span class="hljs-attr">xxxx</span>'{'}'}{'}'}&gt;</span>给路由添加查询参数<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span></div></pre><span class="xnote-source-code-lang">HTML</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">路由拦截</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在初始化路由模块时，可以直接添加拦截器。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'}&nbsp;<span class="hljs-title class_">RouterModule</span>&nbsp;{'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/router'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;routerModule =&nbsp;<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-title class_">RouterModule</span>(<span class="hljs-string">'/'</span>, {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">beforeEach</span>(<span class="hljs-params">current, nextParams, next</span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(current, nextParams)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-title function_">next</span>()</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'},</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">afterEach</span>(<span class="hljs-params">params</span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(params)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">createApp</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span>/&gt;</span></span>).<span class="hljs-title function_">use</span>(routerModule).<span class="hljs-title function_">mount</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">'#app'</span>)</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">重定向</div>
    </div>
    <div data-lang="Tsx" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&lt;<span class="hljs-title class_">RouterOuelet</span>&nbsp;config=[{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">path</span>:&nbsp;<span class="hljs-string">'page'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">// 可以直接配置一个字符串，或用函数返回一个新的路由</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">// redirectTo: 'page1'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-title function_">redirectTo</span>(<span class="hljs-params">path</span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-string">'page1'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}]&gt;&lt;/<span class="hljs-title class_">RouterOutlet</span>&gt;</span></div></pre><span class="xnote-source-code-lang">Tsx/Jsx</span>
      </div>
    </div>
  </div>
</div></div>
    )
  }
}