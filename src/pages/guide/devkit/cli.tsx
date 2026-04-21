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
      <div class="xnote-h1">脚手架</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>面向 Viewfly 应用的命令行脚手架：在本地快速生成基于 Vite 的 TypeScript 项目，并可选集成 @viewfly/router 与 scoped CSS（通过 @viewfly/devtools 的 Vite 插件）。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">安装</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">全局安装（推荐日常使用）</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npm install -g @viewfly/cli</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"># 或</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">pnpm add -g @viewfly/cli</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>安装后全局命令为 viewfly（见 package.json 的 bin 字段）。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h3">不全局安装：使用 npx / pnpm dlx</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">npx @viewfly/cli create my-app</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"># 或</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">pnpm dlx @viewfly/cli create my-app</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">快速开始</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">viewfly create my-viewfly-app</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"># 等价别名</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">viewfly new my-viewfly-app</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>按提示选择可选特性、包管理器，以及是否在创建后立即安装依赖。完成后进入目录执行开发脚本即可。</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">cd my-viewfly-app</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">pnpm dev &nbsp;&nbsp;&nbsp;# 或 npm run dev / yarn dev，取决于你选的包管理器</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>查看 CLI 自身版本：</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">viewfly --version</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"># 或</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">viewfly -v</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>查看顶层帮助：</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">viewfly --help</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>子命令帮助：</div>
    </div>
    <div data-lang="" data-component="SourceCodeComponent" data-auto-break="false" data-theme="xnote-dark" data-line-number="false" class="xnote-source-code xnote-dark">
      <div class="xnote-source-code-container hljs">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">viewfly create --help</span></div></pre><span class="xnote-source-code-lang"></span>
      </div>
    </div>
  </div>
</div></div>
    )
  }
}