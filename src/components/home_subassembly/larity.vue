<template>
  <div>
    <div>人气推荐</div>
    <div class="box">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <img :src="item.pic" alt />
          <p>{{ item.name }}</p>
          <p>{{item.stores}}</p>
          <p>${{item.minPrice}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props:['list'],
  data() {
    return {
      // list: []
    };
  },
  components: {},
  mounted() {
   // this.larity();
  },
  methods: {
    // larity() {
    //   this.$axios
    //     .get("https://api.it120.cc/small4/shop/goods/list")
    //     .then(res => {
    //       // console.log(res);
    //       this.list = res.data.data;
    //     });
    // }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  ul{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
          width: 48%;
          img{
              width: 100%;
              height: 250px;
              margin: 10px;
          }
      }
  }
}
</style>