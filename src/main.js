import Vue from 'vue'
import App from './App.vue'
import Iview from 'iview'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Iview)
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
