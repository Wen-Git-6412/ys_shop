<template>
  <div>
    <div class="box">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in list" in :key="index">
          <img :src="item.picUrl" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: []
    };
  },
  props: {},
  components: {},
  mounted() {
    this.banner();
  },
  methods: {
    banner() {
      this.$axios.get("https://api.it120.cc/small4/banner/list").then(res => {
        // console.log(res);
        this.list = res.data.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
body,
html {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  margin-top: -80px;
  img {
    width: 100%;
  }
}
</style>