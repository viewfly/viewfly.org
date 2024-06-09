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
      <div class="xnote-h1">脚手架</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">安装</div>
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
      <div>cli 创建的模板支持以下功能</div>
    </div>
    <ul data-component="ListComponent" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content">开发语言：TypeScript/JavaScript</div>
      </li>
    </ul>
    <ul data-component="ListComponent" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
        <div class="xnote-list-content">样式表：sass/less/css</div>
      </li>
    </ul>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">使用</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"># 创建项目</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">viewfly new my-app</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"># 进入项目目录</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">cd my-app</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"># 安装依赖</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"># 启动项目</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm start</span></div></pre><span class="xnote-source-code-lang"></span>
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