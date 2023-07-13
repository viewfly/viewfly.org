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
<p>Viewfly 采用自上而下的单身数据流方案，当父组件变化时，子组件也会自动渲染</p></div>
    )
  }
}