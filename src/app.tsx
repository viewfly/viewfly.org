import { RootRouter, RouterOutlet } from '@viewfly/router'

import { Header } from './components/header/header'
import { Home } from './pages/home/home'
import { Guide } from './pages/guide/guide'
import './assets/doc.scss'
import './app.scss'
import { Footer } from './components/footer/footer'

export function App() {
  return () => {
    return (
      <RootRouter>
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
      </RootRouter>
    )
  }
}
