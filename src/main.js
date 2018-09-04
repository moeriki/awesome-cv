// import 'babel-polyfill'; // IE 11 & Safari 9 support
import '@fortawesome/fontawesome-pro/css/all.css';
import 'vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: colors.amber.darken1,
    secondary: colors.amber.lighten2,
    accent: colors.amber.lighten4,
  },
});

/* eslint no-new:off */

new Vue(App).$mount('#app');
