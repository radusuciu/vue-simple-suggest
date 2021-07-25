import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp({
  el: '#app',
  render: h => h(App)
})