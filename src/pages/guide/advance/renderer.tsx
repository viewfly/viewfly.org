import { inject, useRef } from '@viewfly/core'
import { ViewUpdateInjectionToken } from '../injection-tokens'
export default function() {
  const subject = inject(ViewUpdateInjectionToken)
  const ref = useRef(node => {
    subject.next(node as HTMLElement)
  })
  return function() {
    return (
      <div ref={ref}><h1>渲染及性能优化</h1>
<p>Viewfly 目前的 diff 算法是非常高效的。大部分场景我们并不需要关心性能问题。但总有一些场景，数据量特别大，变动又特别频繁。我们可以参考下面的策略进行性能调优。</p>
<p>Viewfly 采用自上而下的单身数据流方案，当父组件变化时，子组件也会自动渲染。所以我们可以有意识的拆分变动频繁的部分和不常变动的部分为两个组件，并且让两个组件不属于父子或父孙关系，当 Viewfly 在更新 DOM 时，就会跳过没有变化的分支，这可以显著的提高 diff 的效率。</p>
<h2>Key</h2>
<p>对于列表渲染，我们可以通过给循环生成的节点添加 key 的方式来“优化”性能。相同 key 的元素会直接复用，而不是重新创建或删除。key 的值只可以是字符串字数字，且在相同层级内必须是唯一的。</p><pre lang="Jsx" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line">list.<span class="tb-hl-function">map</span>(item =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;&lt;<span class="tb-hl-tag">li&nbsp;</span><span class="tb-hl-attr-name">key</span>={'{'}item.id{'}'}&gt;xxxx&lt;/<span class="tb-hl-tag">li</span>&gt;</div><div class="tb-code-line">{'}'})</div></div><span class="tb-pre-lang">Jsx</span></div></pre>
<tb-alert data-type="primary" class="tb-alert tb-alert-primary">
  <div>冷知识：添加 key 只是会让 diff 算法强制重用 DOM 节点，在很多情况下，添加 key 不一定会使性能更优。</div>
</tb-alert>
<h2>withMemo()</h2>
<p>对于部分组件，我们明确知道什么时候应该更新，我们可以使用 withMemo 函数，明确告知 Viewfly，可以跳过组件的更新。</p>
<p>withMemo 的第一个参数为一个函数，当组件需要更新时，Viewfly 会调用此函数，并传入当前的组件的 Props 和上一次的 Props。你可以通过返回 false 来让 Viewfly 跳过本次更新。</p><pre lang="Jsx" theme="starry" line-number class="tb-pre"><div class="tb-pre-content"><div style="width:2.5em" class="tb-code-line-number-bg"></div><div class="tb-code-content"><div class="tb-code-line"><span class="tb-hl-keyword">import</span>&nbsp;{'{'} withMemo {'}'}&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@viewfly/core'</span></div><div class="tb-code-line"><br/></div><div class="tb-code-line"><span class="tb-hl-keyword">function</span>&nbsp;<span class="tb-hl-function">List</span>(props) {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;<span class="tb-hl-function">withMemo</span>((currentProps, prevProps) =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// 判断组件是否需要更新，返回 false 则跳过本次更新 diff</span></div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;currentProps.value !== prevProps.value</div><div class="tb-code-line">&nbsp;&nbsp;{'}'}, () =&gt; {'{'}</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-keyword">return</span>&nbsp;(</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="tb-hl-tag">li</span>&gt;{'{'}props.value{'}'}&lt;/<span class="tb-hl-tag">li</span>&gt;</div><div class="tb-code-line">&nbsp;&nbsp;&nbsp;&nbsp;)</div><div class="tb-code-line">&nbsp;&nbsp;{'}'})</div><div class="tb-code-line">{'}'}</div></div><span class="tb-pre-lang">Jsx</span></div></pre></div>
    )
  }
}