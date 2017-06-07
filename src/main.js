import Vue from 'vue'
import App from './App.vue'
import iView  from 'iview/dist/iview'
import 'iview/dist/styles/iview.css'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

Vue.use(iView)
Vue.use(VueRouter)

var RouterConfig = {
    routes:[
        {path:'/home', component:Home}
    ]
}

const router = new VueRouter(RouterConfig);

new Vue({
    el:'#app',
    router,
    render:h =>h(App)
})
