import { createApp } from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import { borderBox1 } from '@jiaminghi/data-view'


let app = createApp(App);
app.use(dataV)
app.use(borderBox1)

app.mount('#app')
