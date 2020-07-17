import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Fenlei from '@/components/fenlei'
import Cart from '@/components/cart'
import My from '@/components/my'

//home的子组件
import Index from '@/components/home_subassembly/index'//home组件
import Banner from '@/components/home_subassembly/banner'//头部banner
import Navc from '@/components/home_subassembly/navc'//签到
import Bargain from '@/components/home_subassembly/bargain'//砍价
import Goods from '@/components/home_subassembly/goods'//精选专题
import Larity from '@/components/home_subassembly/larity'//人气推荐

//砍价列表
import Bargains from '@/components/Bargains/Bargains'

//详情列表
import Details from '@/components/Bargains/details'

//分类商品
import Catgiv from '@/components/catgiv/catgiv'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: "/",
      component: Home,
      children: [
        {
          path: '/',
          name: 'index',
          component: Index,
        },
        {
          path: '/fenlei',
          name: 'fenlei',
          component: Fenlei,
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart,
        },
        {
          path: '/my',
          name: 'my',
          component: My,
        },
      ]
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner,
    },
    {
      path: '/navc',
      name: 'navc',
      component: Navc,
    },
    {
      path: '/bargain',
      name: 'bargain',
      component: Bargain,
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods,
    },
    {
      path: '/larity',
      name: 'larity',
      component: Larity,
    },
    {
      path: '/Bargains/',
      name: 'Bargains',
      component: Bargains,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details,
    },
    {
      path: '/catgiv/:id',
      name: 'catgiv',
      component: Catgiv,
      meta: {
        title: "分类商品"
    }
    },
  ]
})
