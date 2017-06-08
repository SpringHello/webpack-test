import Vue from 'vue'
import App from './App.vue'
import iView  from 'iview/dist/iview'
import 'iview/dist/styles/iview.css'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import login from './components/login.vue'
import register from './components/register.vue'

Vue.use(iView)
Vue.use(VueRouter)

var RouterConfig = {
    routes:[
        {path:'/login', component:login},
        {path:'/register', component:register}
    ]
}

const router = new VueRouter(RouterConfig);

new Vue({
    el:'#app',
    router,
    render:h =>h(App)
})
