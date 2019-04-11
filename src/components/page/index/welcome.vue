<template>
  <div>
    <h1>Welcome admin!</h1>
  </div>
</template>

<script>
export default {
  name: 'welcome',
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
