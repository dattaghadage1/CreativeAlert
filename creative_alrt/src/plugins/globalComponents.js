import BaseAlert from "../Common/BaseAlert";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

export default {
  install(Vue) {
    Vue.component(BaseAlert.name, BaseAlert);

  },
};
