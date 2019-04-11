import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout,Menu,Icon,Breadcrumb,Dropdown,Avatar,Card,Row,Col,Input,Table,Affix,Button,Pagination } from 'ant-design-vue';
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Breadcrumb);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.use(Table);
Vue.use(Affix);
Vue.use(Button);
Vue.use(Pagination);
Vue.config.productionTip = false;
//路由全局钩子函数 beforeEach afterEach
router.beforeEach((to,from,next) => {
  if (to.matched.some(record => record.meta.loginFlag)) {
    if(window.location.href.indexOf("login") < 0){
      if(localStorage.getItem('loginFlag') !== "1"){
        next({
            path: '/login'
        })
      }else{
        next();
      }
    }else {
      next();
  }  
} else {
    next(); // 确保一定要调用 next()
}
});
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
