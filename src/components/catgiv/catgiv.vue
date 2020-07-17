<template>
  <div>
    <!-- <catgiv></catgiv> -->
    <catgiv v-if="list.length>0" :list="list"/>
  </div>
</template>

<script>
import catgiv from "@/components/home_subassembly/larity";
export default {
  name: "",
  data() {
    return {
      gid: 0, // 接受的id
      cartlist: [] //所有数据
    };
  },
  props: {},
  components: {
    catgiv
  },
  computed: {
    list() {
      return this.cartlist.filter(item => {
        return item.categoryId == this.gid;
      });
    }
  },

  mounted() {
    this.gid = this.$route.params.id;
    console.log(this.gid)
    // console.log(this.gid)
    this.cartgoods();
  },
  methods: {
    //请求所有数据
    cartgoods() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then(res => {
          console.log(res);
          this.cartlist = res.data.data;
        });
    }
  }
};
</script>

<style scoped>
</style>