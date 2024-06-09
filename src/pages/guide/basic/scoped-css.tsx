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
      <div class="xnote-h1">模块化 CSS</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">安装依赖</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在应用开发中，模块化 css 是可以帮助我们解决样式 命名冲突的问题，要使用模块化 css，需先装对应的 webpack loader。</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install @viewfly/devtools -D</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>然后在 webpack 配置项中，替换 css-loader。</div>
    </div>
    <div data-lang="JavaScript" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">test</span>:&nbsp;<span class="hljs-regexp">/\.css$/</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">use</span>: [</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-string">'style-loader'</span>,</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">// 'css-loader',</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-string">'@viewfly/devtools/scoped-css-webpack-loader'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;]</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">JavaScript</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>安装 scoped-css 扩展包</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install @viewfly/scoped-css</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>准备工作做完后，就可以正式编写代码了。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">应用作用域 CSS</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>要使 webpack 正确编译出作用域 CSS，我们约定，css 文件名必须为：[name].scoped.css，也可以为其它通用的预处理器文件，如 a.scoped.scss、b.scoped.less、c.scoped.stylus 等。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>如果命名不符合规则，scoped-css-webpack-loader 将会作为普通样式表文件解析。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>在组件中使用作用域样式，只需要调用 withScopedCSS 函数，并传入作用域样式表返回的 ID 传给渲染函数即可。</div>
    </div>
    <div data-lang="CSS" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-comment">/* app.scoped.css */</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-selector-class">.box</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attribute">width</span>:&nbsp;<span class="hljs-number">200px</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attribute">height</span>:&nbsp;<span class="hljs-number">40px</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attribute">color</span>: red;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">CSS</span>
      </div>
    </div>
    <div data-lang="Tsx" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'} withScopedCSS {'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/scoped-css'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;css&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'./app.scoped.css'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-title function_">withScopedCss</span>(css,&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&nbsp;<span class="hljs-attr">class</span>=<span class="hljs-string">"box"</span>&gt;</span>text<span class="hljs-tag">&lt;/<span class="hljs-name">box</span>&gt;</span></span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">Tsx/Jsx</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>编译后的样式表为：</div>
    </div>
    <div data-lang="CSS" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-selector-class">.box</span><span class="hljs-selector-attr">[vf-xxxx]</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attribute">width</span>:&nbsp;<span class="hljs-number">200px</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attribute">height</span>:&nbsp;<span class="hljs-number">40px</span>;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attribute">color</span>: red;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">CSS</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>渲染出的 DOM 节点也会添加上作用域属性</div>
    </div>
    <div data-lang="HTML" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&nbsp;<span class="hljs-attr">class</span>=<span class="hljs-string">"box"</span>&nbsp;<span class="hljs-attr">vf-xxxx</span>&gt;</span>text<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></div></pre><span class="xnote-source-code-lang">HTML</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">绑定多个样式表</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>一般场景下，我们只需绑定一个样式表即可，但你还是可以绑定多个模块化样式表。</div>
    </div>
    <div data-lang="Tsx" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;home&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'./home.scoped.css'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;common&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'./common.scoped.css'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-comment">// 绑定多个样式表</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-title function_">withScopedCss</span>([home, common],&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;{'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&nbsp;<span class="hljs-attr">class</span>=<span class="hljs-string">"box"</span>&gt;</span>text<span class="hljs-tag">&lt;/<span class="hljs-name">box</span>&gt;</span></span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div></pre><span class="xnote-source-code-lang">Tsx/Jsx</span>
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