import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal.lighten2, // #4DB6AC
        secondary: colors.teal.base, // #009688
        accent: colors.deepOrange.base, // #FF7043
      },
      breakpoint: {
        mobileBreakpoint: '960' // This is equivalent to a value of 960
      },
    },
  },
});
