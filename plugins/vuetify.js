import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from 'vuetify/lib/util/colors'

import '../../node_modules/vuetify/dist/vuetify.min.css';
import '../css/sass/main.scss';
import "@mdi/font/css/materialdesignicons.css";

import VueTheMask from 'vue-the-mask'

Vue.use(Vuetify);
Vue.use(VueTheMask)

const vuetifyOpts = {
  theme: {
    themes: {
      light: {
        primary: '#777',
        secondary: '#43a047',
        accent: colors.indigo.base,
      },
    },
  },
  icons: {
    iconfont: "mdi"
  }
};

export default new Vuetify(vuetifyOpts);
