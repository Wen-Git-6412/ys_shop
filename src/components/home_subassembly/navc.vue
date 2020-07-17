<template>
  <div>
    <ul>
      <li>
        <van-grid>
          <van-grid-item icon="photo-o" text="签到" />
          <van-grid-item icon="photo-o" text="礼倦" />
          <van-grid-item icon="photo-o" text="砍价" />
          <van-grid-item icon="photo-o" text="专栏" />
        </van-grid>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      nav: []
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
ul {
  position: relative;
  top: -40px;

  li {
    position: absolute;
    width: 100%;
  }
}
</style>