<template>
  <div>
    <div>
      <!-- <h3>全民砍价</h3> -->
    </div>
    <div class="box">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="">
            <router-link class="left" :to="`/details/`+item.id">
              <img :src="item.pic" alt />
            </router-link>
          </div>
          <div class="right">
            <div class="top">
              <p v-html="item.name"></p>
              <p>{{item.characteristic}}</p>
            </div>
            <div class="button">
              <div>
                <p class="red">￥{{item.minPrice}}</p>
                <p>低价</p>
              </div>
              <div>
                <p>￥{{item.originalPrice}}</p>
                <p>原价</p>
              </div>
              <div>
                <p>{{item.stores}}</p>
                <p>限量</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
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
    this.bargain();
  },
  methods: {
    bargain() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
        .then(res => {
          // console.log(res.data);
          this.list = res.data.data.goodsMap;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  h3 {
    margin-top: 100px;
  }
  ul {
    li {
      margin-top: 50px;
      border-top: 1px solid #ddd;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: -30px;
      .left {
        width: 30%;
        margin-top: 20px;
        border-radius: 30%;
        margin-left: 10px;
        img {
          width: 80%;
          height: 90%;
          border-radius: 5%;
        }
      }
      .right {
        width: 70%;
        margin-top: 20px;
        margin-left: 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .top {
          width: 100%;
        }
        .button {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .red {
            color: red;
          }
        }
      }
    }
  }
}
</style>