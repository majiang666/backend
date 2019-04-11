import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import bread from './bread/bread';
Vue.use(Vuex);
const store = new Vuex.Store({
    plugins: [createLogger()],
    modules:{
        bread
    }
});
export default store;