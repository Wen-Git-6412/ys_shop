<template>
  <div>
    <div>
        <bargain></bargain>
    </div>
  </div>
</template>

<script>
import bargain from '@/components/home_subassembly/bargain'
export default {
  name: '',
  data() { 
    return {
        gid:0
    }
  },
  props: {

  },
  components:{
    bargain
  },
  mounted() {
    this.gid = this.$route.parims.id;
    // this.listid = this.$route.parims.id;
    console.log(this.gid)
  },
  methods:{

  },
 }
</script>

<style scoped>
</style>