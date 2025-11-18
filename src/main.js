import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'

UIkit.use(Icons)

// Make UIkit available globally
window.UIkit = UIkit

createApp(App).use(router).mount('#app')

