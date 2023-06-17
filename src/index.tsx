import { createApp } from '@viewfly/platform-browser'
import { App } from './app'
import 'normalize.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './scss/index.scss'

createApp(document.getElementById('app')!, <App/>)
