import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'uno.css'
import generatedRoutes from 'virtual:generated-pages'; 

const router = createRouter({
    history: createWebHistory(),
    routes: generatedRoutes,
  });
  

const app = createApp(App)
app.use(router)

app.mount('#app')
