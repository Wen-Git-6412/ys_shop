<template>
  <div>
    <div>
      <p>精选专题</p>
    </div>
    <div class="box">
      <van-swipe :loop="false" :width="300">
        <van-swipe-item v-for="(item,index) in list" :key="index">
          <img :src="item.pic" alt />
          <p v-html="item.title" ></p>
          <p v-html="item.descript" class="p1"></p>
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
    this.goods();
  },
  methods: {
    goods() {
      this.$axios
        .get("https://api.it120.cc/small4/cms/news/list")
        .then(res => {
          // console.log(res);
          this.list = res.data.data;
          //   console.log(this.list)
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  margin: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  img {
    width: 100%;
    height: 300px;
    // margin-left: px;
    display: block;
    margin-right: 4px;
    border-radius: 5%;
  }
  .p1{
     text-overflow: ellipsis;
    //  overflow: hidden;
  }
}
</style>