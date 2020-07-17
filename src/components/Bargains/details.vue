<template>
  <div>
    <div class="box">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in list" :key="index">
          <img :src="item.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="tab-item">
      <van-tabs>
        <van-tab title="商品详情">
          <p v-html="content"></p>
        </van-tab>
        <van-tab title="商品评价">
          <p>{{}}</p>
        </van-tab>
      </van-tabs>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="28" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <div class="go" @click="goback">
        <van-icon name="arrow-left" />
    </div>
    <!-- 到此 -->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      gid: 0,
      list: [],
      content: null
    };
  },
  props: {},
  components: {},
  mounted() {
    this.gid = this.$route.params.id;
    console.log(this.$route.params.id);
    this.details();
    
  },
  methods: {
    details() {
      this.$axios;
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/detail",

        params: {
          id: this.gid
        }
      }).then(res => {
        this.list = res.data.data.pics;
        console.log(this.list);
        console.log(res.data.data);
        this.content = res.data.data.content;
      });
    },
    goback(){
         this.$router.go(-1);
        // 到此
    }
  }
};
</script>

<style lang="scss">
.box {
  width: 100%;
  img {
    width: 100%;
  }
}
.tab-item {
  width: 100%;
  background: #fff;
  // margin-top: 0.2rem;
  p {
    //   padding: 0.15rem;
    width: 100% !important;
    box-sizing: border-box;
    img {
      width: 100% !important;
    }
  }
}
.go{
    position: fixed;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: red;
    top: 10px;
    left: 10px;
    text-align: center;
}
</style>