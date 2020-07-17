<template>
  <div>
    <div class="top">
      <div>
        <van-search placeholder="请输入搜索关键词" input-align="center" />
      </div>
    </div>
    <div>
      <van-tree-select height="55vw" :items="items" :main-active-index.sync="activeIndex">
        <template #content>
          <div class="catgiv">
            <router-link
              tag="div"
              v-for="(item,index) in cate"
              :key="index"
              class="item"
              :to="`/Catgiv/`+item.id"
            >
              <img :src="item.icon" alt />
              <p>{{item.name}}</p>
            </router-link>
          </div>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      data: [], //所有数据
      cid: [], //主键id
      // active: 0,
      items: [{ text: "所有分类" }],
      activeIndex: 0
    };
  },
  props: {},
  computed: {
    cate() {
      let arr = this.data;
      //当前选择的是所有分类的话
      if (this.activeIndex == 0) {
        return arr;
      }
      //筛选子集分类
      return arr.filter(item => {
        return item.pid == this.cid[this.activeIndex];
      });
    }
  },
  mounted() {
    this.goods();
  },

  components: {},

  methods: {
    goods() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/category/all")
        .then(res => {
          console.log(res);
          this.data = res.data.data;
          // console.log(this.data);
          res.data.data.forEach(item => {
            if (item.pid == 0) {
              this.items.push({ text: item.name });
              this.cid.push(item.id);
            }
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.catgiv {
  max-height: 85%;
  overflow: auto;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 28%;
    margin: 1%;
    img {
      width: 90%;
      // height: 1.2rem;
    }
    p {
      // line-height: 0.6rem;
      width: 90%;
      text-align: center;
    }
  }
}
</style>