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
      <div class="xnote-h1">简介</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Viewfly 是一个数据驱动的 JavaScript 框架，提供了一套简单、符合直觉的 API，帮助你高效的构建富交互的用户界面。</div>
    </div>
    <blockquote data-component="BlockquoteComponent" class="xnote-blockquote">
      <div>
        <div data-component="ParagraphComponent" class="xnote-paragraph">
          <div>Viewfly 提倡<strong>回归原生 JavaScript，不创建特殊语法，不改变 JavaScript 语义，不依赖特殊的编译环境</strong>，并坚持用我们熟悉的语法来完成应用的开发。</div>
        </div>
      </div>
    </blockquote>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>一个最简单的示例如下：</div>
    </div>
    <div data-lang="Tsx" data-component="SourceCodeComponent" data-auto-break="true" data-theme="xnote-dark" data-line-number="true" class="xnote-source-code xnote-source-code-line-number xnote-dark">
      <div class="xnote-source-code-container hljs xnote-source-code-auto-break">
        <div style="width:2.5em" class="xnote-source-code-line-number-bg"></div><pre style="padding-left:2.5em;margin-left:-2.5em" class="xnote-source-code-content"><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'} reactive {'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/core'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">import</span>&nbsp;{'{'} createApp {'}'}&nbsp;<span class="hljs-keyword">from</span>&nbsp;<span class="hljs-string">'@viewfly/platform-browser'</span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">const</span>&nbsp;model =&nbsp;<span class="hljs-title function_">reactive</span>({'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-attr">count</span>:&nbsp;<span class="hljs-number">0</span>&nbsp;&nbsp;</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'})</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {'{'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-function">() =&gt;</span>&nbsp;<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{'{'}model.count{'}'}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content">{'}'}</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span>&nbsp;model.<span class="hljs-property">count</span>++,&nbsp;<span class="hljs-number">1000</span>)</span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><br/></span></div><div class="xnote-source-code-line"><span class="xnote-source-code-line-content"><span class="hljs-title function_">createApp</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">App</span>/&gt;</span></span>).<span class="hljs-title function_">mount</span>(<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">'app'</span>))</span></div></pre><span class="xnote-source-code-lang">Tsx/Jsx</span>
      </div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>从上面的示例，我们可以看出：</div>
    </div>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-inner">
          <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
          <div class="xnote-list-content">Viewfly 通过类似 Vue 的响应式对象管理数据。</div>
        </div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-inner">
          <div class="xnote-list-type"><span class="xnote-order-btn">•</span></div>
          <div class="xnote-list-content">Viewfly 使用 tsx/jsx 描述 UI，并可以声明式的绑定事件和数据。</div>
        </div>
      </li>
    </ul>
    <div data-component="HighlightBoxComponent" data-icon="📌" class="xnote-highlight-box">
      <div class="xnote-highlight-box-left">
        <div class="xnote-highlight-box-icon"><button type="button">📌</button></div>
      </div>
      <div class="xnote-highlight-box-content">
        <div data-component="ParagraphComponent" class="xnote-paragraph">
          <div>我们假定你已基本熟悉 HTML、CSS、JavaScript 和 tsx/jsx 的使用，如果你还不熟悉相关的知识，建议你先去了解这些基础知识的基本概念，并能简单的使用。</div>
        </div>
      </div>
    </div>
    <blockquote data-component="BlockquoteComponent" class="xnote-blockquote">
      <div>
        <div data-component="ParagraphComponent" class="xnote-paragraph">
          <div><em>Viewfly 还支持 Signal API，你可以按自己的喜好选择。</em></div>
        </div>
      </div>
    </blockquote>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div class="xnote-h2">为什么开发 Viewfly？</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>如果你是一位经验丰富的前端开发者，我相信你也会和我们一样遇到相同的问题。有的前端框架太重，创建一个组件的样板代码过多；有的不符合直觉，有闭包陷阱；有的有太多和社区割裂的自创语法，不能很好的和其它类库结合；有的有太多自己的主张，侵入性太严重；有的对 TypeScript 支持不友好等等。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>如今，前端真的是太重了，学习一个框架就像学习一门新语言一样。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>我们相信，只使用普通的 JavaScript 一样可以编写出高质量、可维护、简单且容易扩展的代码。这也是我开发 Viewfly 的初衷。</div>
    </div>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div>Viewfly 充分吸收了现有前端框架的一些优点，并在开发者使用层面有所体现，有：</div>
    </div>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-inner">
          <div class="xnote-list-type"><span class="xnote-order-btn"><strong>•</strong></span></div>
          <div class="xnote-list-content"><strong style="color:rgb(18, 118, 204)">独立 Hook</strong>&nbsp;—— reactive、createSignal、watch 等所有 hook 都可以在组件外使用，这让我们可以更灵活的组织组件和数据。</div>
        </div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-inner">
          <div class="xnote-list-type"><span class="xnote-order-btn"><strong>•</strong></span></div>
          <div class="xnote-list-content"><strong style="color:rgb(18, 118, 204)">JSX</strong><span style="color:rgb(73, 80, 96)">&nbsp;</span>—— JSX 是 React 发明的一种声明式 UI 描述语言，其灵活的编写方式，丰富的表达能力，现在被大多数前端框架所采用，基本已成为前端 UI 描述语言的通用解决方案。</div>
        </div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-inner">
          <div class="xnote-list-type"><span class="xnote-order-btn"><strong>•</strong></span></div>
          <div class="xnote-list-content"><strong style="color:rgb(18, 118, 204)">函数组件</strong><span style="color:rgb(73, 80, 96)">&nbsp;</span>—— 函数组件因其创建简单，使用灵活，备受前端开发人员青睐。</div>
        </div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-inner">
          <div class="xnote-list-type"><span class="xnote-order-btn"><strong>•</strong></span></div>
          <div class="xnote-list-content"><strong style="color:rgb(18, 118, 204)">依赖注入</strong><span style="color:rgb(73, 80, 96)">&nbsp;</span>—— 依赖注入可以方便构建可拆分、可测试、架构健壮的应用。</div>
        </div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-inner">
          <div class="xnote-list-type"><span class="xnote-order-btn"><strong>•</strong></span></div>
          <div class="xnote-list-content"><strong style="color:rgb(18, 118, 204)">Signal/Reactive</strong><span style="color:rgb(73, 80, 96)">&nbsp;——</span>&nbsp;同时支持 Signal 和 Reactive 两种响应式风格，有利于适应更复杂的需求，构建大型应用。</div>
        </div>
      </li>
    </ul>
    <ul data-component="ListComponent" data-reorder="true" style="margin-left:0px" class="xnote-list">
      <li>
        <div class="xnote-list-inner">
          <div class="xnote-list-type"><span class="xnote-order-btn"><strong>•</strong></span></div>
          <div class="xnote-list-content"><strong style="color:rgb(18, 118, 204)">TypeScript 兼容</strong><span style="color:rgb(73, 80, 96)">&nbsp;</span>—— 由于 Viewfly 的组件本质是一堆函数，所以可以无缝和 TypeScript 集成，方便你写出类型安全的代码。</div>
        </div>
      </li>
    </ul>
    <div data-component="ParagraphComponent" class="xnote-paragraph">
      <div><br/></div>
    </div>
  </div>
</div></div>
    )
  }
}