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
      <div class="xnote-h1">安装</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">通过脚手架安装</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>通过 &nbsp;npm 安装 Viewfly 的脚手架。</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install @viewfly/cli -g</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>通过命令行创建项目，<span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">即可创建一个 Viewfly 的项目。</span></div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">viewfly new my-app</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">cd my-app</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">通过 npm 安装</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install @viewfly/core @viewfly/platform-browser</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>选择手动安装，如果使用 ts-loader 编译，需要在 tsconfig.json 中添加 tsx 编译配置项。</div>
    </div>
    <div data-lang="JSON" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-punctuation">{'{'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">"compilerOptions"</span><span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-punctuation">{'{'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">"jsx"</span><span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-string">"react-jsx"</span><span class="hljs-punctuation">,</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">"jsxImportSource"</span><span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-string">"@viewfly/core"</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-punctuation">{'}'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-punctuation">{'}'}</span></span></div></pre><span class="xnote-source-code-lang">JSON</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>如果使用 webpack + babel 编译，需要添加如下配置</div>
    </div>
    <div data-lang="JSON" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-punctuation">{'{'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;loader<span class="hljs-punctuation">:</span>&nbsp;'babel-loader'<span class="hljs-punctuation">,</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;options<span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-punctuation">{'{'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;presets<span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-punctuation">[</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-punctuation">[</span><span class="hljs-string">"@babel/preset-env"</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-punctuation">[</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-string">"@babel/preset-react"</span><span class="hljs-punctuation">,</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-punctuation">{'{'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;runtime<span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-string">"automatic"</span><span class="hljs-punctuation">,</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;importSource<span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-string">"@viewfly/core"</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-punctuation">{'}'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-punctuation">]</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-punctuation">{'}'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-punctuation">{'}'}</span></span></div></pre><span class="xnote-source-code-lang">JSON</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>如果要使用装饰器实现依赖注入，需要使用 TypeScript，并且在 tsconfig.json 中添加如下配置并安装 reflect-metadata。</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install reflect-metadata</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在 tsconfig.json 中添加如下配置</div>
    </div>
    <div data-lang="JSON" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content xnote-source-code-content-highlight"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-punctuation">{'{'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">"compilerOptions"</span><span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-punctuation">{'{'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">"jsx"</span><span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-string">"react-jsx"</span><span class="hljs-punctuation">,</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">"jsxImportSource"</span><span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-string">"@viewfly/core"</span><span class="hljs-punctuation">,</span></span></div><div class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">"emitDecoratorMetadata"</span><span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-literal"><span class="hljs-keyword">true</span></span><span class="hljs-punctuation">,</span></span></div><div class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-attr">"experimentalDecorators"</span><span class="hljs-punctuation">:</span>&nbsp;<span class="hljs-literal"><span class="hljs-keyword">true</span></span><span class="hljs-punctuation">,</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-punctuation">{'}'}</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-punctuation">{'}'}</span></span></div></pre><span class="xnote-source-code-lang">JSON</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在应用的入口导入 reflect-metadata。</div>
    </div>
    <div data-lang="Tsx" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content xnote-source-code-content-highlight"><div class="xnote-source-code-line xnote-source-code-line-emphasize"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;<span class="hljs-string">'reflect-metadata'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'} createApp {'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/platform-browser'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {'{'}...{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">createApp</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span>/&gt;</span></span>).<span class="hljs-title function_">mount</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">'app'</span>))</span></div></pre><span class="xnote-source-code-lang">Tsx/Jsx</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">第一个应用</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>每一个应用都是通过 createApp 函数创建的 Viewfly 实例。在创建实例时，我们会传入一个挂载 Viewfly 实例的根节点和一个组件。Viewfly 会自动把组件的内容渲染到根节点内。</div>
    </div>
    <div data-lang="Tsx" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'} createSignal {'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/core'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'} createApp {'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/platform-browser'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">const</span>&nbsp;<span class="hljs-built_in">number</span>&nbsp;=&nbsp;<span class="hljs-title function_">createSignal</span>(<span class="hljs-number">0</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;(</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span></span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{'{'}number(){'}'}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">button</span>&nbsp;<span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span>&nbsp;<span class="hljs-attr">onClick</span>=<span class="hljs-string">{'{'}()</span>&nbsp;=&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;number.set(number() + 1)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}{'}'}&gt;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点我加 1</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="language-xml">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;app =&nbsp;<span class="hljs-title function_">createApp</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span>/&gt;</span></span>).<span class="hljs-title function_">mount</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">'app'</span>))</span></div></pre><span class="xnote-source-code-lang">Tsx/Jsx</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在创建应用时，我们只能传入一个组件，我们把这个组件叫做根组件。一个应用只能有一个根组件，其它的组件只能作为根组件的子组件。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><strong>注意</strong>：Viewfly 在挂载时，会清空根节点内的所有内容，你应该提供一个空的容器来挂载应用。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">Viewfly 实例</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在调用 createApp 函数时，会返回一个 Viewfly 的实例。我们可以创建任意多的 Viewfly 实例，这些实例之间都是独立运行的，互相不受干扰。</div>
    </div>
    <div data-lang="Tsx" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'} createApp {'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/platform-browser'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {'{'}...{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;app1 =&nbsp;<span class="hljs-title function_">createApp</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span>/&gt;</span></span>).<span class="hljs-title function_">mount</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">'app'</span>))</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">App2</span>(<span class="hljs-params"></span>) {'{'}...{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;app2 =&nbsp;<span class="hljs-title function_">createApp</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">App2</span>/&gt;</span></span>).<span class="hljs-title function_">mount</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">'app2'</span>))</span></div></pre><span class="xnote-source-code-lang">Tsx/Jsx</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">销毁实例</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在有的情况下，我们可能需要手动销毁应用，这只需要调用 destroy() 方法即可。</div>
    </div>
    <div data-lang="TypeScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">app.<span class="hljs-title function_">destroy</span>()</span></div></pre><span class="xnote-source-code-lang">TypeScript</span>
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