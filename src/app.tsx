import { Header } from './components/header/header'
// import { Home } from './pages/home/home'
import { Guide } from './pages/guide/guide'
import './assets/doc.scss'

export function App() {
  return () => {
    return (
      <>
        <Header/>
        {/*<Home/>*/}
        <Guide/>
      </>
    )
  }
}
