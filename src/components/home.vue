<template>
  <div>
    <router-view />
    
    <div>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/fenlei">分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/my">个人</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import banner from '@/components/home_subassembly/banner'
import navc from '@/components/home_subassembly/navc'
import bargain from '@/components/home_subassembly/bargain'
export default {
  name: "",
  data() {
    return {
      active: 0
    };
  },
  props: {},
  components: {
    banner,navc,bargain
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>