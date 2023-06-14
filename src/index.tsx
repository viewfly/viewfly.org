import { createApp } from '@viewfly/platform-browser'
import { App } from './app'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(document.getElementById('app')!, <App/>)
