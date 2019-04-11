import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('@/components/page/home')
const Login = () => import('@/components/login')
const Welcome = () => import('@/components/page/index/welcome');
const App = () => import('@/components/page/internet/app');
const Amount = () => import('@/components/page/internet/amount');
const Carte = () => import('@/components/page/internet/carte');
Vue.use(VueRouter);
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            component:Home,
            meta:{
                loginFlag:true
            },
            redirect:'/welcome',
            children:[
                {
                    path:'/welcome',
                    component:Welcome,
                    meta:{
                        loginFlag:true,
                        title:'Home'
                    }
                },
                {
                    path:'/internet',
                    component:App,
                    redirect:'/internet/app',
                    meta:{
                        loginFlag:true,
                        title:'应用管理'
                    }
                },{
                    path:'/internet/app',
                    component:App,
                    meta:{
                        loginFlag:true,
                        title:'应用管理'
                    }
                },
                {
                    path:'/internet/amount',
                    component:Amount,
                    meta:{
                        loginFlag:true,
                        title:'装机量统计'
                    }
                },
                {
                    path:'/internet/carte',
                    component:Carte,
                    meta:{
                        loginFlag:true,
                        title:'菜单管理'
                    }
                }
            ]
        }
    ]
})
export default router;