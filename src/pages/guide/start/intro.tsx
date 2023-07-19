import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>简介</h1>
<p>Viewfly 是一个数据驱动的 JavaScript 框架，提供了一套简单、符合直觉的 API，帮助你高效的构建富交互的用户界面。</p>
<tb-alert data-type="primary" class="tb-alert tb-alert-primary">
  <div>Viewfly 提倡<strong>回归原生 JavaScript，不创建特殊语法，不改变 JavaScript 语义，不依赖特殊的编译环境</strong>，并坚持用我们熟悉的语法来完成应用的开发。</div>
</tb-alert>
<p>一个最简单的示例如下：</p><pre lang="Jsx" theme="dark" class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} useSignal {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/core'</span></div><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} createApp {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/platform-browser'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">const</span>&nbsp;count =&nbsp;<span class="tb-hl-function">useSignal</span>(<span class="tb-hl-number">0</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">App</span>() {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;() =&gt; &lt;<span class="tb-hl-tag">div</span>&gt;{'{'}<span class="tb-hl-function">count</span>(){'}'}&lt;/<span class="tb-hl-tag">div</span>&gt;</div><div class="tb-code-line">{'}'}</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-function">setInterval</span>(() =&gt; count.<span class="tb-hl-function">set</span>(<span class="tb-hl-function">count</span>() +&nbsp;<span class="tb-hl-number">1</span>),&nbsp;<span class="tb-hl-number">1000</span>)</div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-function">createApp</span>(document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'app'</span>), &lt;<span class="tb-hl-class-name">App</span>/&gt;)</div></div><span class="tb-pre-lang">Jsx</span></div></pre>
<p>从上面的示例，我们可以看出：</p>
<ul>
  <li class="tb-list-item">Viewfly 通过 Signal 管理数据，通过调用获取 Signal 的数据，通过 &nbsp;signal.set 更新数据。</li>
  <li class="tb-list-item">Viewfly 使用 tsx/jsx 描述 UI，并可以声明式的绑定事件和数据。</li>
</ul>
<tb-alert data-type="warning" class="tb-alert tb-alert-warning">
  <div>ℹ️ 我们假定你已基本熟悉 HTML、CSS、JavaScript 和 tsx/jsx 的使用，如果你还不熟悉相关的知识，建议你先去了解这些基础知识的基本概念，并能简单的使用。</div>
</tb-alert>
<h2>为什么开发 Viewfly？</h2>
<p>如果你是一位经验丰富的前端开发者，我相信你也会和我们一样遇到相同的问题。有的前端框架太重，创建一个组件的样板代码过多；有的不符合直觉，有闭包陷阱；有的有太多和社区割裂的自创语法，不能很好的和其它类库结合；有的有太多自己的主张，侵入性太严重；有的对 TypeScript 支持不友好等等。</p>
<p>如今，前端真的是太重了，学习一个框架就像学习一门新语言一样。</p>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">我们相信，只使用普通的 JavaScript 一样可以编写出高质量、可维护、简单且容易扩展的代码。这也是我开发 Viewfly 的初衷。</span></p>
<p><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">Viewfly 充分吸收了现有前端框架的一些优点，并在开发者使用层面有所体现，有：</span></p>
<ul>
  <li class="tb-list-item"><strong style="color:rgb(18, 118, 204)"><span style="background-color:rgb(255, 255, 255)">独立 Hook</span></strong>&nbsp;—— useSignal、useEffect 等所有以 use 开头的 hook 都可以在组件外使用，这让我们可以更灵活的组织组件和数据。</li>
  <li class="tb-list-item"><strong style="color:rgb(18, 118, 204)"><span style="background-color:rgb(255, 255, 255)">JSX</span></strong><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">&nbsp;—— JSX 是 React 发明的一种声明式 UI 描述语言，其灵活的编写方式，丰富的表达能力，现在被大多数前端框架所采用，基本已成为前端 UI 描述语言的通用解决方案。</span></li>
  <li class="tb-list-item"><strong style="color:rgb(18, 118, 204)"><span style="background-color:rgb(255, 255, 255)">函数组件</span></strong><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">&nbsp;—— 函数组件因其创建简单，使用灵活，备受前端开发人员青睐。</span></li>
  <li class="tb-list-item"><strong style="color:rgb(18, 118, 204)"><span style="background-color:rgb(255, 255, 255)">依赖注入</span></strong><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">&nbsp;—— 依赖注入可以方便构建可拆分、可测试、架构健壮的应用。</span></li>
  <li class="tb-list-item"><span style="color:rgb(18, 118, 204)"><strong><span style="background-color:rgb(255, 255, 255)">Signa</span></strong><span style="background-color:rgb(255, 255, 255)">l</span></span><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">&nbsp;—— Signal 的本质为一组相关联的 getter 和 setter，Signal 不会对原始数据做任何包装或更改。有利于构建大型复杂应用。</span></li>
  <li class="tb-list-item"><strong style="color:rgb(18, 118, 204)"><span style="background-color:rgb(255, 255, 255)">TypeScript 兼容</span></strong><span style="background-color:rgb(255, 255, 255);color:rgb(73, 80, 96)">&nbsp;—— 由于 Viewfly 的组件本质是一堆函数，所以可以无缝和 TypeScript 集成，方便你写出类型安全的代码。</span></li>
</ul>
<p><br/></p></div>
    )
  }
}