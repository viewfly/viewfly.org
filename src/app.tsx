import { Navigator, RouterOutlet } from '@viewfly/router'

import { Header } from './components/header/header'
import { Home } from './pages/home/home'
import { Guide } from './pages/guide/guide'
import './assets/doc.scss'
import './app.scss'
import { Footer } from './components/footer/footer'
import { inject, onDestroy } from '@viewfly/core'

export function App() {
  const navigator = inject(Navigator)
  const sub = navigator.onUrlChanged.subscribe(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  })
  onDestroy(() => {
    sub.unsubscribe()
  })
  return () => {
    return (
      <>
        <Header/>
        <main>
          <RouterOutlet config={[
            {
              name: '',
              component: Home
            },
            {
              name: 'guide',
              component: Guide
            }
          ]}></RouterOutlet>
        </main>
        <Footer/>
      </>
    )
  }
}
