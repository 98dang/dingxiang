import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue";
import TestContainer from "./components/testContainer.vue";
import listContainer from "./components/listContainer.vue";
import homeContainer from "./components/tabbar/HomeContainer.vue";
import shopContainer from "./components/tabbar/ShopContainer.vue";
import shopDetails from "./components/tabbar/shopDetails.vue";
import login from "./components/tabbar/login.vue";
import register from "./components/tabbar/register.vue";
import personalCenter from "./components/personal/center.vue";
import search from "./components/search/search.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/test",component:TestContainer},
    {path:"/list",component:listContainer},
    {path:"/home",component:homeContainer},
    {path:"/home/shop/:id",component:shopContainer},
    {path:"/home/deta",component:shopDetails},
    {path:'/',redirect:"/home"},
    {path:'/home/login',component:login},
    {path:'/home/register',component:register},
    {path:'/home/center',component:personalCenter},
    {path:'/home/search',component:search},
  ]
})
