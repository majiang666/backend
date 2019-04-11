<template>
  <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </a-layout-content>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

</style>
