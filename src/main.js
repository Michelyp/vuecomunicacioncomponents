import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .mount('#app')
