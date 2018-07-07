import 'babel-polyfill'; // IE 11 & Safari 9 support
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App.vue';

/* eslint no-new:off */

Vue.use(Vuetify);

new Vue(App).$mount('#app');
