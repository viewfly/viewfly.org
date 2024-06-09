import { Navigator, RouterOutlet } from '@viewfly/router'

import { Header } from './components/header/header'
import { Home } from './pages/home/home'
import './assets/doc.scss'
import './app.scss'
import { Footer } from './components/footer/footer'
import { inject, onUnmounted } from '@viewfly/core'

export function App() {
  const navigator = inject(Navigator)
  const sub = navigator.onUrlChanged.subscribe(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  })
  onUnmounted(() => {
    sub.unsubscribe()
  })
  return () => {
    return (
      <>
        <Header/>
        <main>
          <RouterOutlet config={[
            {
              path: '',
              component: Home
            },
            {
              path: 'guide',
              asyncComponent: () => import('./pages/guide/guide').then(mod => mod.Guide)
            },
            {
              path: 'playground',
              asyncComponent: () => import('./playground/playground').then(mod => mod.Playground)
            }
          ]}></RouterOutlet>
        </main>
        <Footer/>
      </>
    )
  }
}
