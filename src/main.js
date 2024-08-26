import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import App from './App.vue'

// vuetify
import "vuetify/styles"
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { router } from './router'

const { createVuetify } = Vuetify
const app = createApp(App)
const vuetify  = createVuetify({
    components,
    directives
})
app.use(vuetify)
app.use(router)
app.mount('#app')