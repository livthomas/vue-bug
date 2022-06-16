import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import {VueBugPlugin} from 'vue-bug-lib';

createApp(App).use(VueBugPlugin).mount('#app')
