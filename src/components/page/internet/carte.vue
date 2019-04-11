<template>
  <div>
    <h1>菜单统计</h1>
  </div>
</template>

<script>
export default {
  name: 'carte',
  mounted () {
    this.setBread(this.$router.currentRoute.meta.title);
  },
  methods: {
    setBread(val){
      this.$store.commit('showBread',val)
    }
  }
}
</script>

<style scoped>

</style>
