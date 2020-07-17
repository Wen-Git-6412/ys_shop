<template>
  <div>
    <div>
      <banner></banner>
    </div>
    <div>
      <navc></navc>
    </div>
    <div>
      <bargain></bargain>
    </div>
    <div>
        <goods></goods>
    </div>
    <div>
      <larity></larity>
    </div>
  </div>
</template>

<script>
import banner from "@/components/home_subassembly/banner";
import navc from "@/components/home_subassembly/navc";
import bargain from "@/components/home_subassembly/bargain";
import goods from "@/components/home_subassembly/goods";
import larity from "@/components/home_subassembly/larity";
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {
    banner,
    navc,
    bargain,
    goods,
    larity
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>