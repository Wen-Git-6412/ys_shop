<template>
  <div>
    <div>
      <!-- 模糊搜索 -->
      <van-search v-model="val" placeholder="请输入搜索关键词" />
      <catgiv v-if="list.length>0" :list="getgoods" />
    </div>
    <div>
      <van-button type="warning">警告按钮</van-button>
    </div>
  </div>
</template>
 
<script>
import catgiv from "@/components/home_subassembly/larity";

export default {
  name: "",
  data() {
    return {
      val: "",
      list: []
    };
  },
  props: {},
  components: {
    catgiv
  },
  mounted() {
    this.getlist();
  },
  computed: {
    getgoods() {
      if (this.val == "") {
        return [];
      }
      return this.list.filter(item => {
        return item.name.indexOf(this.val) > -1;
      });
    }
  },
  methods: {
    getlist() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then(res => {
          console.log(res);
          this.list = res.data.data;
        });
    },

    //获取历史记录
    getHistory(){

    },
    setHistory(){

    },
    removeHistory(){

    }
  }
};
</script>

<style scoped>
</style>