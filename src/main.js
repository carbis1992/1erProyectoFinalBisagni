import { createApp } from 'vue'
import App from './App.vue'
// Import our custom CSS
import './scss/styles.scss'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
