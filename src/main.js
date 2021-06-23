import VueScrollactive from 'vue-scrollactive';
import SweetModal from 'sweet-modal-vue/src/plugin';
import CoolLightBox from 'vue-cool-lightbox';
import VueLazyload from 'vue-lazyload';

import Vue from 'vue';
import App from './App.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

Vue.config.productionTip = false;

Vue.use(VueScrollactive);
Vue.use(SweetModal);
Vue.use(CoolLightBox);
// eslint-disable-next-line global-require
Vue.use(VueLazyload, { loading: require('./assets/loading.gif') });

new Vue({
  render: (h) => h(App),
}).$mount('#app');
