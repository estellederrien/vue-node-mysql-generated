// ==========================================================
// IMPORT MODULES
// ==========================================================
// eslint - disable
import Vue from 'vue';
import ShardsVue from 'shards-vue';
import Vuex from "vuex";
import Store from './Store.js'
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';

// ==========================================================
// VUEX DATA STORE WITH VuexPersistence PLUGIN - SHARING DATA BETWEEN COMPONENTS ! - VUEX MAGASIN DE DATA - PARTAGER DES DATAS ENTRE LES COMPONENTS 
// ==========================================================

Vue.use(Vuex);
const store = new Vuex.Store(Store)

ShardsVue.install(Vue);


Vue.component('default-layout', Default);


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// ==========================================================
// TOASTS
// ==========================================================
// https://vuejsexamples.com/a-light-easy-and-beautiful-toasts/
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
Vue.use(Toast);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');