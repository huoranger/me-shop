import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

import divider from "@/components/common/divider.vue"
export function createApp() {
  const app = createSSRApp(App)
  app.component("divider",divider)
  return {
    app
  }
}
// #endif